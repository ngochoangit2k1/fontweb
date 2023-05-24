import React from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'

const Login = () => {
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
					<h1 className='font-medium text-2xl'>Quên mật khẩu</h1>
					<div className=' mt-4 relative '>
						<input
							placeholder='Email'
							className='relative bg-white border-gray-300  rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-[16px] placeholder:text-[#6d767e] w-full p-3'
						/>
					</div>
					<div className=' mx-auto'>
						<button className='flex mt-5 w-[200px] mx-auto max-sm:mx-3 items-center max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center text-white'>
							<FiUser className='font-extrabold text-[20px] max-md:text-sm' />
							<a className='ml-2 max-md:text-[13px] text-base font-normal'>
								Lấy lại mật khẩu
							</a>
						</button>
					</div>
					<div className='text-center text-xl py-6'>
						<Link href={'/register'}>
							<span className='font-bold'>Đăng ký ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default Login
