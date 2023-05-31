import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { BiError } from 'react-icons/bi'
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => console.log(data)

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
				onSubmit={handleSubmit(onSubmit)}
				className='w-[35%]  mx-auto bg-white rounded-xl shadow-xl mt-10'
			>
				<div className='w-[85%] mx-auto pt-8'>
					{' '}
					<h1 className='font-medium text-2xl'>Đăng Nhập</h1>
					<hr className='mt-4  border-[#cccccc]' />
					<div className='mt-5  '>
						<label className='text-base font-medium text-black' htmlFor='text'>
							Tên người dùng hoặc Địa chỉ Email
						</label>
						<input
							id='email'
							type='text'
							placeholder='Email'
							className={`bg-white  border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3
							${
								errors.email
									? 'border border-red-600 ring-2 ring-red-100'
									: 'border border-gray-300'
							}`}
							{...register('email', {
								required: true,
								// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
							})}
						/>
						{errors.email && (
							<p className='mt-1 gap-1 text-sm flex text-red-600'>
								<BiError className='mt-[3px]' />{' '}
								<span>This field is required</span>
							</p>
						)}
					</div>
					<div className=' mt-4 relative '>
						<div className=''>
							<label className='text-base font-medium text-black'>
								Mật khẩu
							</label>
							<input
								id='password'
								type={open === false ? 'password' : 'text'}
								placeholder='password'
								className={`test relative bg-white border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e] w-full p-3			${
									errors.password
										? 'border border-red-600 ring-2 ring-red-100'
										: 'border border-gray-300'
								}`}
								{...register('password', { required: true, minLength: 8 })}
							/>
							{errors.password && (
								<p className='mt-1 gap-1 text-sm flex text-red-600'>
									<BiError className='mt-[3px]' />{' '}
									<span>This field is required</span>
								</p>
							)}
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-9 right-2'>
							{open === false ? (
								<AiOutlineEye onClick={toggle} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle} />
							)}
						</div>
					</div>
					<div className='flex items-center border border-gray-200 rounded'>
						<input
							id='bordered-checkbox-1'
							type='checkbox'
							value=''
							name='bordered-checkbox'
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded'
						/>
						<label
							htmlFor='bordered-checkbox-1'
							className='w-full py-4 ml-2 text-base font-medium text-gray-900'
						>
							Tự động nhập mật khẩu
						</label>
					</div>
					<div className='text-center text-base'>
						<Link href={'/Auth/resetpass'}>
							<span className='font-normal'>Quên tài khoản đăng nhập ?</span>
						</Link>
					</div>
					<div className='w-[30%] mx-auto'>
						{' '}
						<button
							type='submit'
							className='flex mt-5   max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-white'
						>
							<a className='ml-2 max-md:text-[13px] text-base font-normal'>
								Đăng Nhập
							</a>
						</button>
					</div>
					<div className='text-center text-xl py-8'>
						Bạn chưa có tài khoản ?{' '}
						<Link href={'/Auth/register'}>
							<span className='font-bold'>Đăng ký ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default Login
