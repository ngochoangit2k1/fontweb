import React, { useState } from 'react'
import Image from 'next/image'
import { HiOutlineUser } from 'react-icons/hi2'
import { IoMdTime } from 'react-icons/io'
import { HiOutlineCircleStack } from 'react-icons/hi2'
import imgGlobal from '@/data/images'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../redux/cart.slice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
const Profile = () => {
	const router = useRouter()

	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)

	const { data } = useSession()

	const { data: session } = useSession()

	if (session === null) {
		router.push('/')
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
		<div className='mt-28'>
			<Tabs className='flex gap-5  w-[85%] mx-auto  max-xl:w-[90%] max-lg:flex-col'>
				<div className='mt-12 w-[25%] max-lg:w-full   '>
					<Image
						src={imgGlobal.AVT}
						className='w-52 h-52 mx-auto object-cover'
						alt='avt'
					></Image>
					<p className='mt-4 text-center text-blacks font-bold text-md'>
						Xin chào <span className='font-extrabold'>{data?.user?.name}</span>
					</p>

					<TabList className='w-[100%] mt-12 mx-auto bg-whites gap-y-[2px] cursor-pointer  text-blacks font-medium text-[16px]'>
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-whites focus:text-whites  py-3 pl-2 '>
							Thông tin tài khoản{' '}
						</Tab>
						<hr />
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-whites focus:text-whites  py-3 pl-2 '>
							Quản lý tài khoản
						</Tab>
						<hr />
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-whites focus:text-whites  py-3 pl-2 '>
							Quản lý font yêu thích
						</Tab>
						<hr />
						<Tab className=' focus:bg-oranges hover:bg-oranges hover:text-whites focus:text-whites  py-3 pl-2 '>
							Font bạn đã tải lên
						</Tab>
						<hr />
						<Tab
							onClick={() => signOut()}
							className=' focus:bg-oranges hover:bg-oranges hover:text-whites focus:text-whites  py-3 pl-2 '
						>
							Đăng xuất
						</Tab>
					</TabList>
				</div>
				<div className='w-[75%] mt-12 max-lg:w-[100%] '>
					<TabPanel>
						<div className=' w-full  bg-whites rounded-3xl shadow-md py-8  px-10'>
							<h1 className='text-2xl font-medium '>Thông tin tài khoản</h1>
							<div className='flex justify-between mt-7 max-lg:flex-col max-lg:justify-start'>
								<div className='flex py-1'>
									{' '}
									<HiOutlineUser className='mr-2 font-medium text-xl mt-[2px]' />
									<p className='text-[16px] text-blacks font-extrabold max-xl:text-sm'>
										Loại tài khoản:
									</p>{' '}
									<span className='text-gray-400 max-xl:text-sm'>Free</span>
								</div>
								<div className='flex py-1 text-[16px] text-blacks font-extrabold max-xl:text-sm'>
									<HiOutlineCircleStack className='mr-2 text-lg mt-[2px] ' />
									Trạng thái tài khoản:
									<span className='text-[#85f00c] max-xl:text-sm'>
										Đã kích hoạt
									</span>
								</div>
								<div className='flex py-1'>
									{' '}
									<IoMdTime className='mr-2 text-lg mt-[2px] ' />
									<p className='text-[16px] text-blacks font-extrabold max-xl:text-sm'>
										Hạn dùng:
									</p>{' '}
									<span className='text-gray-400 max-xl:text-sm'>
										Vĩnh viễn
									</span>
								</div>
							</div>
							<div className=' mt-4 w-full h-[1px] bg-slate-300'></div>
							<p className='font-normal text-lg text-blacks mt-4 max-lg:text-sm'>
								Nếu bạn chưa thanh toán, vui lòng đặt lại gói thành viên để lấy
								mã thanh toán.
								<Link href={'/goi-vip'} className='text-[#0d6efd] ml-1'>
									Đặt lại
								</Link>
							</p>
						</div>
					</TabPanel>

					<TabPanel>
						<div className=' w-full  bg-whites rounded-3xl shadow-md py-8  px-10 '>
							<div className=''>
								{' '}
								<label
									className='text-base font-medium text-blacks'
									htmlFor='text'
								>
									Họ tên
								</label>
								<input
									defaultValue={data?.user?.name}
									id='text'
									type='text'
									className='bg-whites font-medium border-gray-300 text-blacks rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full py-1.5 px-3'
								/>
							</div>

							<div className='mt-6'>
								<label
									className='mt-10 text-base font-medium text-blacks'
									htmlFor='text'
								>
									Địa chỉ email
								</label>
								<input
									disabled
									defaultValue={data?.user?.email}
									id='email'
									type='email'
									className='bg-[#e9ecef]  font-medium border-gray-300 text-blacks rounded border   w-full py-1.5 px-3'
								/>
							</div>

							<h1 className='text-2xl mt-5 font-medium'>Thay đổi mật khẩu</h1>

							<div className=' mt-4 relative '>
								<div>
									<label
										className='mt-10 text-base font-medium text-blacks'
										htmlFor='text'
									>
										Mật khẩu hiện tại (bỏ trống nếu không đổi)
									</label>
									<input
										type={eye1 === false ? 'password' : 'text'}
										id='confirmPassword'
										className='test relative bg-whites  border-gray-300 text-gray-900  rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 p-3'
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
										className='mt-10 text-base font-medium text-blacks'
										htmlFor='text'
									>
										Mật khẩu mới (bỏ trống nếu không đổi)
									</label>
									<input
										type={eye2 === false ? 'password' : 'text'}
										id='confirmPassword'
										className='test relative bg-whites  border-gray-300 text-gray-900  rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 p-3'
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
										className='mt-10 text-base font-medium text-blacks'
										htmlFor='text'
									>
										Xác nhận mật khẩu mới
									</label>
									<input
										type={eye3 === false ? 'password' : 'text'}
										id='confirmPassword'
										className='test relative bg-whites  border-gray-300 text-gray-900  rounded border focus:outline-none  focus:border-oranges focus:ring-4 focus:ring-red-200  placeholder:text-[#6d767e]  block w-full py-1.5 px-3'
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
								className='flex mt-5 mx-auto  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-whites'
							>
								<a className='ml-2 max-md:text-[13px] text-base font-normal'>
									Lưu thay đổi
								</a>
							</button>
						</div>
					</TabPanel>

					<TabPanel>
						{' '}
						{cart.length === 0 ? (
							<div className='text-center font-semibold text-lg'>
								Chưa có font nào
							</div>
						) : (
							<div className=' w-full grid grid-cols-3 gap-6'>
								{cart.map(item => (
									<>
										<div className='bg-whites shadow-md ' key={item.id}>
											<div className='relative'>
												<div className=' group overflow-hidden'>
													<div className=' cursor-pointer  duration-500 hover:scale-[1.1] relative '>
														<label htmlFor='my-modal-3' className=' '>
															<Image
																src={item.image}
																alt='img'
																width={300}
																height={250}
																className=' w-full h-44 object-cover '
															></Image>
															<div className='w-full h-44 absolute top-0 bg-blacks/60 cursor-pointer  duration-500  opacity-0 group-hover:opacity-80 '>
																<h2 className='text-whites text-center text-sm font-semibold mt-[26%] '>
																	XEM DEMO
																</h2>
															</div>
														</label>
													</div>
												</div>

												<input
													type='checkbox'
													id='my-modal-3'
													className=' modal-toggle'
												/>
												<div className='modal rounded-none'>
													<div className='modal-box max-w-[60%] h-[70%] relative '>
														<label
															htmlFor='my-modal-3'
															className='btn btn-sm btn-circle absolute right-2 top-2'
														>
															✕
														</label>
														<div>
															<Image
																src={item.image}
																alt='img'
																width={800}
																height={800}
																className='w-[99%] object-cover  '
															></Image>
														</div>
													</div>
												</div>

												<button
													onClick={() => {
														dispatch(removeFromCart(item.id))
														toast.success('Font đã được xóa khỏi tài khoản')
													}}
													className='btn-save absolute bg-reds py-[3px] px-[6px] text-whites text-xs rounded-br-lg  z-1'
												>
													<span className='font-bold '> Bỏ lưu</span>
												</button>

												{item.special && (
													<button className='btn-vip absolute bg-[#028623] py-[3px] px-[6px] text-whites text-xs shadow-xxl rounded-bl-lg  z-1'>
														<Link href={'/font-vip'} legacyBehavior>
															<a className='font-bold '>VIP</a>
														</Link>
													</button>
												)}

												{item.selective ? (
													<button className='btn-vip absolute bg-[#ffa800] py-[3px] px-[6px] text-whites text-xs shadow-xxl rounded-bl-lg  z-1'>
														<Link href={'/font-chon-loc'} legacyBehavior>
															<a className='font-bold '>Font chọn lọc</a>
														</Link>
													</button>
												) : null}
											</div>
											<Link href={`font-viet-hoa/${item.nameFont}/${item.id}`}>
												<h2 className='ml-3 mt-4 font-semibold text-base text-[#000000]'>
													{item.title}
												</h2>
											</Link>
											<div className='ml-3 py-4 font-normal text-xs leading-6 text-[#818181]'>
												<p>
													<span className='font-bold'>Tác giả:</span>
													{item.author}
												</p>
												<p>
													<span className='font-bold'>Người đăng:</span>
													{item.user}
												</p>
												<p>
													<span className='font-bold'>Việt hóa :</span>
													{item.translate}
												</p>
												<p>
													<span className='font-bold'>Ngày đăng:</span>
													{item.date}
												</p>
												<p>
													<span className='font-bold'>Số lượt tải font:</span>
													{item.quantity}
												</p>
											</div>
											<div className=' text-sm text-center bg-oranges hover:bg-reds cursor-pointer py-3 text-whites'>
												<Link href='/' legacyBehavior>
													<a className='font-medium'>TẢI FONT NÀY NGAY</a>
												</Link>
											</div>
										</div>
									</>
								))}
							</div>
						)}
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
