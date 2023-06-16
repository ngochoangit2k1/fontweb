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
									className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-whit text-white  text-xs shadow-xxl rounded-br-lg  z-1'
								>
									<span className='font-bold '>Lưu</span>
								</button>
							</div>

							<div className=' text-[#818181] leading-6 text-[12px] ml-4'>
								<div>
									{' '}
									<p>
										<span className='font-bold mr-1'>Tác giả:</span>{' '}
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
									<button className='flex mt-3.5 text-sm font-medium gap-1 px-2 py-1.5 text-center rounded-[4px] bg-[#0163e0] text-white'>
										{' '}
										<FaFacebook className='mt-[2px]' />{' '}
										<span>Chia sẽ facebook</span>
									</button>
								</Link>

								<div className='mt-5 text-sm  text-center bg-oranges hover:bg-[#ff0000] cursor-pointer py-3 px-24 text-white'>
									<Link href='/' legacyBehavior>
										<a className='font-medium'>TẢI FONT NÀY NGAY</a>
									</Link>
								</div>
							</div>
						</div>
						<hr className=' w-full mt-2 mx-auto' />
						<p className='mt-3 font-medium text-lg text-black'>
							<span className='font-bold'>Lưu ý:</span>Font này chỉ sử dụng cho
							mục đích cá nhân. Sử dụng cho mục đích thương mại nên mua bản
							quyền gốc từ tác giả.
						</p>
						<hr className=' w-full mt-2 mx-auto' />

						<p className=' mt-2 font-normal text-black'>{item.content}</p>

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
							<div className='w-1 h-1'></div>
						)}
						<div className='mt-4 bg-white px-3 py-3 text-black'>
							<h3 className='text-lg font-semibold'>Bình luận</h3>

							{data?.user ? (
								<div>
									<p className='mt-2'>
										Đăng nhập với tên {data?.user?.name}.
										<Link href={'/profiles'}>
											<span className='pl-1 text-[#2270b0]'>
												Chỉnh sửa hồ sơ của bạn
											</span>
											.
										</Link>
										<Link onClick={() => signOut()} href={''}>
											<span className='px-1 text-[#2270b0]'>Đăng xuất? </span>
										</Link>
										Các trường bắt buộc được đánh dấu *
									</p>

									<h4 className='mt-4 font-normal'>Bình luận *</h4>
									<textarea
										id='message'
										rows='4'
										className='block p-2.5 w-full text-sm text-black rounded-lg border border-gray-300 focus:outline-none  focus:border-oranges hover:border-oranges dark:bg-gray-700  '
									></textarea>

									<button className='mt-5 font-medium max-sm:mx-3 px-2 max-sm:w-28 max-sm:h-8 h-10 bg-[#fa4921] text-white'>
										Phản hồi
									</button>
								</div>
							) : (
								<div>
									<p className='flex'>
										Bạn phải
										<Link href={'/Auth/login'} legacyBehavior>
											<a className='px-1 text-[#2270b0]'>đăng nhập</a>
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
