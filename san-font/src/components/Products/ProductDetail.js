import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../../redux/cart.slice'

const ProductDetail = ({ dataDetail }) => {
	const { data } = useSession()
	const router = useRouter()
	const dispatch = useDispatch()

	return (
		<>
			{dataDetail.map(item => {
				return (
					<>
						<div className='w-full bg-whites px-3 py-3 '>
							<h1 className='text-2xl font-bold'>
								{dataDetail.map(e => e.title)}
							</h1>
							<div className='flex mt-3'>
								<div className='w-72 h-52 relative'>
									<Image
										src={item.image}
										width={300}
										height={500}
										className='w-full h-full '
									/>

									<button
										onClick={() => {
											if (data?.user) {
												dispatch(addToCart(item))
												toast.success('Font đã được lưu vào tài khoản')
											} else {
												router.push('/Auth/login')
											}
										}}
										className='btn-save absolute bg-reds py-[3px] px-[6px] text-whit text-whites  text-xs shadow-xxl rounded-br-lg  z-1'
									>
										<span className='font-bold '>Lưu</span>
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

								<div className=' text-[#818181] leading-6 text-[12px] ml-4'>
									<div>
										<p>
											<span className='font-bold mr-1'>Tác giả:</span>
											<span>{item.author}</span>
										</p>
										<p>
											<span className='font-bold mr-1'>Người đăng:</span>
											{item.user}
										</p>
										<p>
											<span className='font-bold mr-1'>Việt hóa :</span>
											{item.translate}
										</p>
										<p>
											<span className='font-bold mr-1'>Số lượt tải font:</span>
											{item.quantity}

											<span className='ml-12 font-bold mr-1'>Ngày đăng:</span>
											{item.date}
										</p>
									</div>

									<Link href={'https://www.facebook.com/sharer/'}>
										<button className='flex mt-4 text-sm font-medium gap-1 px-2 py-1.5 text-center rounded-[4px] bg-[#0163e0] text-whites'>
											{' '}
											<FaFacebook className='mt-2' />{' '}
											<span className='text-xs'>Chia sẽ facebook</span>
										</button>
									</Link>

									<div className='mt-4 text-sm  text-center bg-oranges hover:bg-reds cursor-pointer py-3 px-24 text-whites'>
										<Link href='/' legacyBehavior>
											<a className='font-medium'>TẢI FONT NÀY NGAY</a>
										</Link>
									</div>
								</div>
							</div>
							<hr className=' w-full mt-2 mx-auto' />
							<p className='mt-3 font-medium text-lg text-blacks'>
								<span className='font-bold'>Lưu ý:</span>Font này chỉ sử dụng
								cho mục đích cá nhân. Sử dụng cho mục đích thương mại nên mua
								bản quyền gốc từ tác giả.
							</p>
							<hr className=' w-full mt-2 mx-auto' />

							<p className=' mt-2 font-normal text-blacks'>{item.content}</p>

							<Image
								src={item.image}
								width={500}
								height={500}
								className='w-full h-90 mt-3 '
							/>
							{item.image1 ? (
								<Image
									src={item.image1}
									width={500}
									height={500}
									className='w-full h-90 mt-3 '
								/>
							) : (
								<div className='w-1 h-1'></div>
							)}

							{item.image2 ? (
								<Image
									src={item.image2}
									width={500}
									height={500}
									className='w-full h-90 mt-3 '
								/>
							) : (
								<div className='w-1 h-1 '></div>
							)}
						</div>
						<div className=' text-sm  text-center bg-oranges hover:bg-reds cursor-pointer py-4 px-24 text-whites'>
							<Link href='/' legacyBehavior>
								<a className='font-medium'>TẢI FONT NÀY NGAY</a>
							</Link>
						</div>

						<div className='mt-6 bg-whites px-3 py-3 text-blacks'>
							<h3 className='text-lg font-semibold'>Bình luận</h3>

							{data?.user ? (
								<div>
									<p className='mt-2 font-medium'>
										Đăng nhập với tên {data?.user?.name}.
										<Link href={'/profiles'}>
											<span className='pl-1 text-blues'>
												Chỉnh sửa hồ sơ của bạn
											</span>
											.
										</Link>
										<Link onClick={() => signOut()} href={''}>
											<span className='px-1 text-blues'>Đăng xuất? </span>
										</Link>
										Các trường bắt buộc được đánh dấu *
									</p>

									<h4 className='mt-4 font-normal'>Bình luận *</h4>
									<textarea
										id='message'
										rows='4'
										className='block p-2.5 w-full text-sm text-blacks rounded-lg border border-gray-300 focus:outline-none  focus:border-oranges hover:border-oranges dark:bg-gray-700  '
									></textarea>

									<button className='mt-5 font-medium max-sm:mx-3 px-2 max-sm:w-28 max-sm:h-8 h-10 bg-[#fa4921] text-whites'>
										Phản hồi
									</button>
								</div>
							) : (
								<div className='mt-4'>
									<p className='flex font-medium'>
										Bạn phải
										<Link href={'/Auth/login'} legacyBehavior>
											<a className='px-1 text-[#2270b0] hover:text-[#014d8b]'>
												đăng nhập
											</a>
										</Link>
										để gửi phản hồi.
									</p>
								</div>
							)}
						</div>
					</>
				)
			})}
		</>
	)
}

export default ProductDetail
