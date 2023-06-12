import React, { useState } from 'react'
import Image from 'next/image'
import { HiOutlineUser } from 'react-icons/hi2'
import { IoMdTime } from 'react-icons/io'
import { HiOutlineCircleStack } from 'react-icons/hi2'
import imgGlobal from '@/data/images'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Profile = () => {
	const { data } = useSession()
	const router = useRouter()
	const { data: session } = useSession()

	if (session === null) {
		router.push('/Auth/login')
	}
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
		<div className=''>
			<Tabs className='flex gap-5  w-[85%] mx-auto  max-xl:w-[90%] max-lg:flex-col'>
				<div className='mt-12 w-[25%] max-lg:w-full   '>
					<Image
						src={imgGlobal.AVT}
						className='w-52 h-52 mx-auto object-cover'
						alt='avt'
					></Image>
					<p className='mt-4 text-center text-black font-bold text-md'>
						Xin chào <span className='font-extrabold'>{data?.user?.name}</span>
					</p>

					<TabList className='w-[100%] mt-12 mx-auto bg-white gap-y-[2px] cursor-pointer  text-black font-medium text-[16px]'>
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-white focus:text-white  py-3 pl-2 '>
							Thông tin tài khoản{' '}
						</Tab>
						<hr />
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-white focus:text-white  py-3 pl-2 '>
							Quản lý tài khoản
						</Tab>
						<hr />
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-white focus:text-white  py-3 pl-2 '>
							Quản lý font yêu thích
						</Tab>
						<hr />
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-white focus:text-white  py-3 pl-2 '>
							Font bạn đã tải lên
						</Tab>
						<hr />
						<Tab
							onClick={() => signOut()}
							className=' focus:bg-oranges hover:bg-oranges hover:text-white focus:text-white  py-3 pl-2 '
						>
							Thoát
						</Tab>
					</TabList>
				</div>
				<div className='w-[75%] mt-12 max-lg:w-[100%] '>
					<TabPanel>
						<div className=' w-full  bg-white rounded-3xl shadow-md py-8  px-10'>
							<h1 className='text-2xl font-medium '>Thông tin tài khoản</h1>
							<div className='flex justify-between mt-7 max-lg:flex-col max-lg:justify-start'>
								<div className='flex py-1'>
									{' '}
									<HiOutlineUser className='mr-2 font-medium text-xl mt-[2px]' />
									<p className='text-[16px] text-black font-extrabold max-xl:text-sm'>
										Loại tài khoản:
									</p>{' '}
									<span className='text-gray-400 max-xl:text-sm'>Free</span>
								</div>
								<div className='flex py-1 text-[16px] text-black font-extrabold max-xl:text-sm'>
									<HiOutlineCircleStack className='mr-2 text-lg mt-[2px] ' />
									Trạng thái tài khoản:
									<span className='text-[#85f00c] max-xl:text-sm'>
										Đã kích hoạt
									</span>
								</div>
								<div className='flex py-1'>
									{' '}
									<IoMdTime className='mr-2 text-lg mt-[2px] ' />
									<p className='text-[16px] text-black font-extrabold max-xl:text-sm'>
										Hạn dùng:
									</p>{' '}
									<span className='text-gray-400 max-xl:text-sm'>
										Vĩnh viễn
									</span>
								</div>
							</div>
							<div className=' mt-4 w-full h-[1px] bg-slate-300'></div>
							<p className='font-normal text-lg text-black mt-4 max-lg:text-sm'>
								Nếu bạn chưa thanh toán, vui lòng đặt lại gói thành viên để lấy
								mã thanh toán.
								<Link href={'/goi-vip'} className='text-[#0d6efd] ml-1'>
									Đặt lại
								</Link>
							</p>
						</div>
					</TabPanel>

					<TabPanel>
						<div className=' w-full  bg-white rounded-3xl shadow-md py-8  px-10 '>
							<div className=''>
								{' '}
								<label
									className='text-base font-medium text-black'
									htmlFor='text'
								>
									Họ tên
								</label>
								<input
									defaultValue={data?.user?.name}
									id='text'
									type='text'
									className='bg-white font-medium border-gray-300 text-black rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full py-1.5 px-3'
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
										className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 p-3'
									/>
								</div>
								<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-8 right-2 max-md:top-14 max-md:text-lg'>
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
										className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 p-3'
									/>
								</div>
								<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-8 right-2 max-md:top-14 max-md:text-lg'>
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
										className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 px-3'
									/>
								</div>
								<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-8 right-2 max-md:text-lg'>
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
					</TabPanel>

					<TabPanel>
						{' '}
						<div className='text-center font-semibold text-lg'>
							Chưa có font nào
						</div>
					</TabPanel>

					<TabPanel>
						{' '}
						<div className='text-center font-semibold text-lg'>
							Chưa có font nào
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</div>
	)
}

export default Profile
