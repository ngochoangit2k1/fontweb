import React from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { BiError, BiLeftArrowCircle } from 'react-icons/bi'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IoWarningOutline } from 'react-icons/io5'
import axios from 'axios'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import InputOtp from '@/components/InputOtp'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { OTP_CODE_TYPE } from '@/backend/constants/common.constant'
import { useEffect } from 'react'
import AuthApis from '../../../../apis/AuthApis'

const ResetPass = () => {
	const refCountdownOtp = useRef()
	const router = useRouter()

	const [loading, setLoading] = useState(false)
	const [loadingSentcodeEmail, setLoadingSentCodeEmail] = useState(false)
	const [countdownEmail, setCountdownEmail] = useState(60)

	const ResetSchema = yup.object({
		email: yup
			.string()
			.email()
			.required('Trường bắt buộc')
			.max(255)
			.matches(
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				'Email không đúng định đạng'
			)
			.trim(),
		emailVerified: yup.bool().required().default(false),
		otpCode: yup.string().when('emailVerified', {
			is: true,
			then: () => yup.string().length(6).required().trim(),
		}),
		password: yup.string().when('emailVerified', {
			is: true,
			then: () => yup.string().required().min(6).max(30).trim(),
		}),
		rePassword: yup.string().when('password', {
			is: val => (val && val.length > 0 ? true : false),
			then: () =>
				yup.string().oneOf([yup.ref('password')], 'Mật khẩu không đúng'),
		}),
	})
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		trigger,
		setValue,
	} = useForm({
		resolver: yupResolver(ResetSchema),
		defaultValues: {
			emailVerified: false,
		},
		mode: 'onChange',
	})

	const { emailVerified, email, otpCode } = useWatch({
		control,
	})
	console.log(emailVerified, email, otpCode)
	const onSendEmailOTP = () => {
		setLoadingSentCodeEmail(true)
		AuthApis.sendOTP({
			email: (email || '').trim(),
			type: OTP_CODE_TYPE.FORGOT_PASSWORD,
		})
			.then(() => {
				setCountdownEmail(preCount => preCount - 1)
				clearInterval(refCountdownOtp.current)
				refCountdownOtp.current = setInterval(() => {
					setCountdownEmail(preCount => preCount - 1)
				}, 1000)
				return
			})
			.catch(err => console.log(err))
			.finally(() => {
				setLoadingSentCodeEmail(false)
			})
	}

	const onSubmit = values => {
		const { email, otpCode, password, rePassword } = values

		setLoading(true)
		setLoadingSentCodeEmail(true)
		if (!values?.emailVerified) {
			AuthApis.sendOTP({
				email: values.email,
				type: OTP_CODE_TYPE.FORGOT_PASSWORD,
			})
				.then(reponse => {
					if (reponse) {
						setCountdownEmail(preCount => preCount - 1)
						clearInterval(refCountdownOtp.current)
						refCountdownOtp.current = setInterval(() => {
							setCountdownEmail(preCount => preCount - 1)
						}, 1000)
						setValue('emailVerified', true, { shouldValidate: true })
					}
				})
				.catch(() => toast.error('Không tìm thấy tài khoản'))
				.finally(() => {
					setLoadingSentCodeEmail(false)
					setLoading(false)
				})
		} else {
			AuthApis.resetPassword({
				email,
				otpCode,
				password,
				rePassword,
			})
				.then(() => {
					toast.success('Thay đổi mật khẩu thành công')
					router.push('/Auth/login')
				})
				.catch(err => {
					toast.error('Mã OTP không đúng')
				})
				.finally(() => {
					setLoadingSentCodeEmail(false)
					setLoading(false)
				})
		}
	}
	useEffect(() => {
		if (countdownEmail === 0) {
			clearInterval(refCountdownOtp.current)
			setCountdownEmail(90)
		}
	}, [countdownEmail])

	//eye password
	const [eyeOne, setEyeOne] = useState(false)
	const toggle = () => {
		setEyeOne(!eyeOne)
	}

	//eye rePassword
	const [eye, setEye] = useState(false)
	const toggleOne = () => {
		setEye(!eye)
	}

	return (
		<>
			<div className='w-full  flex mt-28'>
				<div className='w-[80%] mx-auto '>
					<Link className='gap-1 flex font-normal text-base' href={'/'}>
						<BiLeftArrowCircle className='text-xl mt-[3px]' />
						Về trang chủ
					</Link>
				</div>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[35%]  mx-auto bg-whites rounded-xl shadow-xl mt-10  max-xl:w-[90%]'
			>
				<div className='w-[85%] mx-auto pt-8'>
					<h1 className='font-medium text-2xl'>Quên mật khẩu</h1>

					{emailVerified && (
						<InputOtp
							value={otpCode || ''}
							onChange={value =>
								setValue('otpCode', value, { shouldValidate: true })
							}
							countdown={countdownEmail}
							errors={errors?.otpCode?.message}
							loading={loadingSentcodeEmail}
							disabledSend={errors?.email}
							onSendOTP={async () => {
								const isVaildEmail = await trigger('email')
								if (isVaildEmail) {
									onSendEmailOTP()
								}
							}}
						></InputOtp>
					)}

					<div className=' mt-4 relative '>
						<input
							id='email'
							type='text'
							placeholder='Email'
							{...register('email')}
							disabled={emailVerified}
							className={`relative bg-whites border-gray-300  rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-[16px] placeholder:text-[#6d767e] w-full p-3				
							${
								errors?.email?.message
									? 'focus:ring-2 focus:ring-red-300 border border-red-500 '
									: 'border border-slate-300 hover:border hover:border-slate-500'
							}`}
						/>
						<span className='flex gap-1 mt-1 text-red-600 text-sm'>
							{errors?.email?.message}
							{errors?.email?.message && (
								<IoWarningOutline className='mt-[3px]' />
							)}
						</span>
					</div>

					{emailVerified && (
						<div className=' mt-4 relative '>
							<div>
								<input
									type={eyeOne === false ? 'password' : 'text'}
									placeholder='Mật khẩu mới'
									id='password'
									{...register('password')}
									onChange={e =>
										setValue(
											'password',
											(e.target.value || '').replace(' ', ''),
											{
												shouldValidate: true,
												shouldDirty: true,
											}
										)
									}
									className={`test relative bg-whites  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3 ${
										errors?.password?.message
											? 'focus:ring-2 focus:ring-red-300 border border-red-500 '
											: 'border border-slate-300 hover:border hover:border-slate-500'
									}`}
								/>
								<span className='flex gap-1 mt-1 text-red-600 text-sm'>
									{errors?.password?.message}
									{errors?.password?.message && (
										<IoWarningOutline className='mt-[3px]' />
									)}
								</span>
							</div>
							<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-3 right-2 max-md:text-lg'>
								{eyeOne === false ? (
									<AiOutlineEye onClick={toggle} />
								) : (
									<AiOutlineEyeInvisible onClick={toggle} />
								)}
							</div>
						</div>
					)}

					{emailVerified && (
						<div className=' mt-4 relative '>
							<div>
								<input
									type={eye === false ? 'password' : 'text'}
									id='rePassword'
									placeholder='Nhập lại mật khẩu mới'
									onChange={e =>
										setValue(
											'rePassword',
											(e.target.value || '').replace(' ', ''),
											{
												shouldValidate: true,
												shouldDirty: true,
											}
										)
									}
									{...register('rePassword')}
									className={`test relative bg-whites  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3 ${
										errors?.rePassword?.message
											? 'focus:ring-2 focus:ring-red-300 border border-red-500 '
											: 'border border-slate-300 hover:border hover:border-slate-500'
									}`}
								/>
								<span className='flex gap-1 mt-1 text-red-600 text-sm'>
									{errors?.rePassword?.message}
									{errors?.rePassword?.message && (
										<IoWarningOutline className='mt-[3px]' />
									)}
								</span>
							</div>
							<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-3 right-2 max-md:text-lg'>
								{eye === false ? (
									<AiOutlineEye onClick={toggleOne} />
								) : (
									<AiOutlineEyeInvisible onClick={toggleOne} />
								)}
							</div>
						</div>
					)}

					<div className='w-full'>
						<button
							type='submit'
							className='flex mx-auto mt-5 px-5  h-10 bg-oranges items-center justify-center text-whites hover:bg-opacity-80 rounded-[30px]  '
						>
							<FiUser className='font-extrabold text-[20px] ' />
							<a className='ml-2 text-base font-normal '>Tiếp tục</a>
						</button>
					</div>
					<div className='text-center text-xl py-6'>
						<Link href={'/Auth/register'}>
							<span className='font-bold'>Đăng ký ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default ResetPass
