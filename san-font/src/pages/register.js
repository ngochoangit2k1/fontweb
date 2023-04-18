import React, { useState } from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Register = () => {
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

			<form className='w-[35%]  mx-auto bg-white rounded-xl shadow-xl mt-10'>
				<div className='w-[85%] mx-auto pt-8'>
					{' '}
					<h1 className='font-medium text-2xl'>Đăng ký</h1>
					<hr className='mt-4  border-[#cccccc]' />
					<div className='mt-5  '>
						<input
							type='text'
							placeholder='Họ tên'
							className='bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3'
						/>
					</div>
					<div className='mt-4'>
						<input
							type='Email'
							placeholder='Email'
							className='bg-white  border-gray-300 text-gray-900 text-sm rounded  border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3'
						/>
					</div>
					<p className='mt-4 font-normal text-xs text-[#6D757D]'>
						* Không sử dụng email Yahoo, email trường CĐ, ĐH khi đăng ký
					</p>
					<div className=' mt-4 relative '>
						<div>
							<input
								type={open === false ? 'password' : 'text'}
								placeholder='Mật khẩu'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'
							/>
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
								placeholder='Nhập lại mật khẩu'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'
							/>
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
						<button className='flex mt-5   max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-white'>
							<FiUser className='font-extrabold text-[20px] max-md:text-sm' />
							<a className='ml-2 max-md:text-[13px] text-base font-normal'>
								Đăng ký
							</a>
						</button>
					</div>
					<div className='text-center text-xl py-8'>
						Bạn đã có tài khoản ?{' '}
						<Link href={'/login'}>
							<span className='font-bold'>Đăng nhập ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default Register
