import React, { useState } from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiError } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Register = () => {
	const [name, setName] = useState('')

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const submitHandler = async e => {
		e.preventDefault()

		try {
			const { data } = await axios.post('/api/register', {
				name,
				email,
				password,
				confirmPassword,
			})
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}
	// const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
	// 	useFormik({
	// 		initialValues: {
	// 			name: '',
	// 			email: '',
	// 			password: '',
	// 			confirmPassword: '',
	// 		},
	// 		validationSchema: Yup.object({
	// 			name: Yup.string()
	// 				.min(5, ' Tên phải đủ 5 kí tự trở lên')
	// 				.max(25, 'Tên không được quá 25 kí tự')
	// 				.required('Trường bắt buột'),

	// 			email: Yup.string()
	// 				.email('email không đúng')
	// 				.required('Trường bắt buột'),
	// 			password: Yup.string()
	// 				.min(8, 'password ít nhất 8 kí tự')
	// 				.required('Trường bắt buột'),

	// 			confirmPassword: Yup.string()
	// 				.oneOf([Yup.ref('password')], 'password không đúng')
	// 				.required('Trường bắt buột'),
	// 		}),
	// 		onSubmit: values => {
	// 			console.log(values)
	// 		},
	// 	})

	const [open, setOpen] = useState(false)
	const toggle = () => {
		setOpen(!open)
	}
	return (
		<>
			<div className='w-full  flex mt-10'>
				<div className='w-[80%] mx-auto '>
					<Link className='flex font-normal text-base' href={'/'}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='mr-1 w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						Về trang chủ
					</Link>
				</div>
			</div>

			<form
				// onSubmit={handleSubmit}
				onSubmit={submitHandler}
				className='w-[35%]  mx-auto bg-white rounded-xl shadow-xl mt-10'
			>
				<div className='w-[85%] mx-auto pt-8'>
					{' '}
					<h1 className='font-medium text-2xl'>Đăng ký</h1>
					<hr className='mt-4  border-[#cccccc]' />
					<div className='mt-5  '>
						<input
							type='text'
							id='name'
							placeholder='Họ tên'
							className='bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3'
							value={name}
							onChange={e => setName(e.target.value)}
							// onChange={handleChange}
							// value={values.name}
							// onBlur={handleBlur}
							// className={`bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3
							// ${
							// 	errors.name
							// 		? 'border border-red-600 ring-2 ring-red-100'
							// 		: 'border border-gray-300 bg-white'
							// }`}
						/>

						{/* {errors.name && touched.name && (
							<p className='mt-1 gap-1 text-sm flex text-red-600'>
								<BiError className='mt-[3px]' /> <span>{errors.name}</span>
							</p>
						)} */}
					</div>
					<div className='mt-4'>
						<input
							type='Email'
							id='email'
							placeholder='Email'
							className='bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3				'
							value={email}
							onChange={e => setEmail(e.target.value)}
							// onChange={handleChange}
							// value={values.email}
							// onBlur={handleBlur}
							// className={`bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3
							// ${
							// 	errors.email
							// 		? 'border border-red-600 ring-2 ring-red-100'
							// 		: 'border border-gray-300 bg-white'
							// }`}
						/>
						{/* {errors.email && touched.email && (
							<p className='mt-1 gap-1 text-sm flex text-red-600'>
								<BiError className='mt-[3px]' /> <span>{errors.email}</span>
							</p>
						)} */}
					</div>
					<p className='mt-4 font-normal text-xs text-[#8d9399]'>
						* Không sử dụng email Yahoo, email trường CĐ, ĐH khi đăng ký
					</p>
					<div className=' mt-4 relative '>
						<div>
							<input
								type={open === false ? 'password' : 'text'}
								placeholder='Mật khẩu'
								id='password'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'
								value={password}
								onChange={e => setPassword(e.target.value)}
								// 	onChange={handleChange}
								// 	value={values.password}
								// 	onBlur={handleBlur}
								// 	className={`test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3
								// ${
								// 	errors.password
								// 		? 'border border-red-600 ring-2 ring-red-100 bg-white'
								// 		: 'border border-gray-300 bg-white'
								// }`}
							/>
							{/* {errors.password && touched.password && (
								<p className='mt-1 gap-1 text-sm flex text-red-600'>
									<BiError className='mt-[3px]' />{' '}
									<span>{errors.password}</span>
								</p>
							)} */}
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-3 right-2'>
							{open === false ? (
								<AiOutlineEye onClick={toggle} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle} />
							)}
						</div>
					</div>
					<div className=' mt-4 relative '>
						<div>
							<input
								type={open === false ? 'password' : 'text'}
								id='confirmPassword'
								placeholder='Nhập lại mật khẩu'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
								// onChange={handleChange}
								// value={values.confirmPassword}
								// onBlur={handleBlur}
								// className={`test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3
								// ${
								// 	errors.password && touched.confirmPassword
								// 		? 'border border-red-600 ring-2 ring-red-100 bg-white'
								// 		: 'border border-gray-300 bg-white'
								// }`}
							/>
							{/* {errors.confirmPassword && touched.confirmPassword && (
								<p className='mt-1 gap-1 text-sm flex text-red-600'>
									<BiError className='mt-[3px]' />{' '}
									<span>{errors.confirmPassword}</span>
								</p>
							)} */}
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-3 right-2'>
							{open === false ? (
								<AiOutlineEye onClick={toggle} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle} />
							)}
						</div>
					</div>
					<div className='w-[30%] mx-auto'>
						{' '}
						<button
							type='submit'
							className='flex mt-5   max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-white'
						>
							<FiUser className='font-extrabold text-[20px] max-md:text-sm' />
							<a className='ml-2 max-md:text-[13px] text-base font-normal'>
								Đăng ký
							</a>
						</button>
					</div>
					<div className='text-center text-xl py-8'>
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
