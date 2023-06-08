import React, { useState } from 'react'
import Image from 'next/image'
import { HiOutlineUser } from 'react-icons/hi2'
import { IoMdTime } from 'react-icons/io'
import { HiOutlineCircleStack } from 'react-icons/hi2'
import imgGlobal from '@/data/images'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Profile = () => {
	const { data } = useSession()

	//eye input1
	const [eye1, setEye1] = useState(false)
	const toggle1 = () => {
		setEye1(!eye1)
	}

	//eye input2
	const [eye2, setEye2] = useState(false)
	const toggle2 = () => {
		setEye2(!eye2)
	}

	//eye input3
	const [eye3, setEye3] = useState(false)
	const toggle3 = () => {
		setEye3(!eye3)
	}
	return (
		<div className='flex  w-[85%] mx-auto '>
			<div className='mt-12 w-[25%] '>
				<Image
					src={imgGlobal.AVT}
					className='w-52 h-52 mx-auto object-cover'
					alt='avt'
				></Image>
				<p className='mt-4 text-center text-black font-bold text-md'>
					Xin chào <span className='font-extrabold'>{data?.user?.name}</span>
				</p>
			</div>
			<div className='w-[75%] mt-12 '>
				<div className=' w-full  bg-white rounded-3xl shadow-md py-8  px-10'>
					<h1 className='text-2xl font-medium '>Thông tin tài khoản</h1>
					<div className='flex justify-between items-center mt-7'>
						<div className='flex'>
							{' '}
							<HiOutlineUser className='mr-2 font-medium text-xl mt-[2px]' />
							<p className='text-[16px] text-black font-extrabold'>
								Loại tài khoản:
							</p>{' '}
							<span className='text-gray-400'>Free</span>
						</div>
						<div className='flex '>
							{' '}
							<HiOutlineCircleStack className='mr-2 text-lg mt-[2px]' />
							<p className='text-[16px] text-black font-extrabold'>
								Trạng thái tài khoản:
							</p>{' '}
							<span className='text-[#85f00c] '>Đã kích hoạt</span>
						</div>
						<div className='flex'>
							{' '}
							<IoMdTime className='mr-2 text-lg mt-[2px]' />
							<p className='text-[16px] text-black font-extrabold'>
								Hạn dùng:
							</p>{' '}
							<span className='text-gray-400'>Vĩnh viễn</span>
						</div>
					</div>
					<div className=' mt-4 w-full h-[1px] bg-slate-300'></div>
					<p className='font-normal text-lg text-black mt-4'>
						Nếu bạn chưa thanh toán, vui lòng đặt lại gói thành viên để lấy mã
						thanh toán.
						<Link href={'/goi-vip'} className='text-[#0d6efd] ml-1'>
							Đặt lại
						</Link>
					</p>
				</div>

				<div className='mt-6 w-full  bg-white rounded-3xl shadow-md py-8  px-10'>
					<h1 className='text-2xl font-medium'>Quản lý tài khoản</h1>

					<div className=''>
						{' '}
						<label className='text-base font-medium text-black' htmlFor='text'>
							Họ tên
						</label>
						<input
							defaultValue={data?.user?.name}
							id='text'
							type='text'
							className='bg-white font-medium border-gray-300 text-black rounded border focus:outline-none hover:border-oranges focus:border-oranges focus:ring-2 focus:ring-red-200  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full py-1.5 px-3'
						/>
					</div>

					<div className='mt-6'>
						<label
							className='mt-10 text-base font-medium text-black'
							htmlFor='text'
						>
							Địa chỉ email
						</label>
						<input
							disabled
							defaultValue={data?.user?.email}
							id='email'
							type='email'
							className='bg-[#e9ecef]  font-medium border-gray-300 text-black rounded border   w-full py-1.5 px-3'
						/>
					</div>

					<h1 className='text-2xl mt-5 font-medium'>Thay đổi mật khẩu</h1>

					<div className=' mt-4 relative '>
						<div>
							<label
								className='mt-10 text-base font-medium text-black'
								htmlFor='text'
							>
								Mật khẩu hiện tại (bỏ trống nếu không đổi)
							</label>
							<input
								type={eye1 === false ? 'password' : 'text'}
								id='confirmPassword'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges focus:ring-2 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 p-3'
							/>
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-8 right-2'>
							{eye1 === false ? (
								<AiOutlineEye onClick={toggle1} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle1} />
							)}
						</div>
					</div>

					<div className=' mt-4 relative '>
						<div>
							<label
								className='mt-10 text-base font-medium text-black'
								htmlFor='text'
							>
								Mật khẩu mới (bỏ trống nếu không đổi)
							</label>
							<input
								type={eye2 === false ? 'password' : 'text'}
								id='confirmPassword'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges focus:ring-2 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 p-3'
							/>
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-8 right-2'>
							{eye2 === false ? (
								<AiOutlineEye onClick={toggle2} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle2} />
							)}
						</div>
					</div>

					<div className=' mt-4 relative '>
						<div>
							<label
								className='mt-10 text-base font-medium text-black'
								htmlFor='text'
							>
								Xác nhận mật khẩu mới
							</label>
							<input
								type={eye3 === false ? 'password' : 'text'}
								id='confirmPassword'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges focus:ring-2 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 px-3'
							/>
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-8 right-2'>
							{eye3 === false ? (
								<AiOutlineEye onClick={toggle3} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle3} />
							)}
						</div>
					</div>
					<button
						type='submit'
						className='flex mt-5 mx-auto  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-white'
					>
						<a className='ml-2 max-md:text-[13px] text-base font-normal'>
							Lưu thay đổi
						</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
