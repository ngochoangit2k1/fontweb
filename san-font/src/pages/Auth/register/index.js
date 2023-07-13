import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoWarningOutline } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useMemo } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import AuthApis from '../../../../apis/AuthApis'
const Register = () => {
	const router = useRouter()

	const SignUpSchema = useMemo(
		() =>
			yup
				.object()
				.shape({
					username: yup
						.string()
						.required('Trường bắt buộc')
						.min(3, 'Tối thiểu 3 kí tự')
						.max(50, 'Tối đa 50 kí tự')
						.trim(),
					email: yup
						.string()
						.email('Email không hợp lệ')
						.required('Trường bắt buộc')
						.max(255)
						.matches(
							/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
							'Vui lòng nhập email hợp lệ'
						)
						.trim(),
					password: yup
						.string()
						.required('Trường bắt buộc')
						.min(6, 'Tối thiểu 6 kí tự')
						.max(30, 'Tối đa 30 kí tự')
						.trim(),
					confirmPassword: yup
						.string()
						.when('password', {
							is: val => (val && val.length > 0 ? true : false),
							then: () =>
								yup
									.string()
									.oneOf([yup.ref('password')], 'Mật khẩu không giống nhau'),
						})
						.required('Trường bắt buộc')
						.trim(),
				})
				.required(),
		[]
	)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(SignUpSchema),
		mode: 'onChange',
	})

	const onSubmit = values => {
		// setLoading(true);
		const { fullName, email, password, referralCode, username } = values

		AuthApis.signUpUser({ email, password, fullName, referralCode, username })
			.then(() => {
				router.push('/Auth/login')
				toast.success('Đăng ký thành công')
			})
			.catch(err => {
				console.log(err)
			})
			.finally(() => {})
	}
	//eye password
	const [eyeOne, setEyeOne] = useState(false)
	const toggle = () => {
		setEyeOne(!eyeOne)
	}

	//eye confirmPassword
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
					{' '}
					<h1 className='font-medium text-2xl'>Đăng ký</h1>
					<hr className='mt-4  border-[#cccccc]' />
					<div className='mt-5  '>
						<input
							type='text'
							id='username'
							placeholder='Họ tên'
							{...register('username')}
							className={`bg-whites test  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3 ${
								errors?.username?.message
									? 'focus:ring-2 focus:ring-red-300 border border-red-500 '
									: 'border border-slate-300 hover:border hover:border-slate-500'
							}`}
						/>
						<span className='flex gap-1 mt-1 text-red-600 text-sm'>
							{errors?.username?.message}
							{errors?.username?.message && (
								<IoWarningOutline className='mt-[3px]' />
							)}
						</span>
					</div>
					<div className='mt-4'>
						<input
							type='Email'
							id='email'
							placeholder='Email'
							{...register('email')}
							className={`test relative bg-whites border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e] w-full p-3 ${
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
					<p className='mt-4 font-normal text-xs text-[#8d9399]'>
						* Không sử dụng email Yahoo, email trường CĐ, ĐH khi đăng ký
					</p>
					<div className=' mt-4 relative '>
						<div>
							<input
								type={eyeOne === false ? 'password' : 'text'}
								placeholder='Mật khẩu'
								id='password'
								{...register('password')}
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
					<div className=' mt-4 relative '>
						<div>
							<input
								type={eye === false ? 'password' : 'text'}
								id='confirmPassword'
								placeholder='Nhập lại mật khẩu'
								{...register('confirmPassword')}
								className={`test relative bg-whites  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3 ${
									errors?.confirmPassword?.message
										? 'focus:ring-2 focus:ring-red-300 border border-red-500 '
										: 'border border-slate-300 hover:border hover:border-slate-500'
								}`}
							/>
							<span className='flex gap-1 mt-1 text-red-600 text-sm'>
								{errors?.confirmPassword?.message}
								{errors?.confirmPassword?.message && (
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
					<div className='w-full  '>
						<button
							type='submit'
							className='flex mt-5 mx-auto px-5 h-10 bg-oranges  items-center justify-center text-whites  hover:bg-opacity-80 rounded-[30px]'
						>
							<FiUser className='font-extrabold text-[20px]' />
							<a className='ml-2 text-base font-normal'>Đăng ký</a>
						</button>
					</div>
					<div className='text-center text-lg py-8 '>
						Bạn đã có tài khoản ?{' '}
						<Link href={'/Auth/login'}>
							<span className='font-bold'>Đăng nhập ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default Register
