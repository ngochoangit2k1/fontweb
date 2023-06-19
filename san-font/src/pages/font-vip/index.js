import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { addToCart } from '../../../redux/cart.slice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const FontVip = ({ fontVip }) => {
	const dispatch = useDispatch()
	const { data } = useSession()
	const router = useRouter()
	return (
		<>
			<div className='mt-32'>
				<h2 className='font-bold text-3xl ml-[8%] mt-16'>
					Font vip ( {fontVip.length} font)
				</h2>
				<div className='w-[85%] mx-auto mt-6 grid grid-cols-4 gap-6 max-2xl:w-[95%] max-lg:grid-cols-2 max-sm:grid-cols-1'>
					{fontVip.map((item, id) => {
						return (
							<>
								<div className='bg-whites shadow-lg' key={id}>
									<div className='relative'>
										<div className=' group overflow-hidden'>
											<div className=' cursor-pointer duration-500 hover:scale-[1.1]  relative'>
												<label htmlFor='my-modal-3' className=''>
													<Image
														src={item.image}
														alt='logo'
														width={300}
														height={250}
														className=' w-full h-44 object-cover  '
													></Image>
													<div className='w-full h-44 absolute top-0 bg-blacks/60  duration-500  opacity-0 cursor-pointer group-hover:opacity-100 '>
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
											className='modal-toggle'
										/>
										<div className='modal rounded-none'>
											<div className='modal-box relative'>
												<label
													htmlFor='my-modal-3'
													className='btn btn-sm btn-circle absolute right-2 top-2'
												>
													✕
												</label>
												<Image
													src={item.image}
													alt='img'
													width={300}
													height={250}
													className=' w-full h-full object-cover  '
												></Image>
											</div>
										</div>

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

										{/* <button
									onClick={() => {
										dispatch(removeFromCart(item))
										toast.success('Font đã được xóa khỏi tài khoản')
									}}
									className='btn-save absolute bg-reds py-[3px] px-[6px] text-whites text-xs shadow-BShadow  rounded-br-lg  z-1'
								>
									<span className='font-bold'>Đã lưu</span>
								</button> */}

										<button className='btn-vip absolute bg-[#028623] py-[3px] px-[6px] text-whites text-xs shadow-xxl rounded-bl-lg  z-1'>
											<span className='font-bold '>VIP</span>
										</button>
									</div>

									<Link href={`font-quang-cao/${item.nameFont}/${item.id}`}>
										<h2 className='ml-3 mt-4 font-semibold text-base text-[#000000]'>
											{item.title}
										</h2>
									</Link>
									<div className='ml-3 py-4 font-normal text-xs leading-6 '>
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
						)
					})}
				</div>
			</div>
		</>
	)
}

export default FontVip

export async function getStaticProps() {
	const response = await fetch(`http://localhost:4000/HomeData`)
	const data = await response.json()

	const datas = data.filter(e => e.special)

	return {
		props: {
			fontVip: datas,
		},
	}
}
