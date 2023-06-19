import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopDownload = ({ downLoad }) => {
	return (
		<>
			<h2 className='font-medium text-3xl ml-[7%] mt-32'>Top Download</h2>
			<div className='w-[85%]	 mx-auto mt-6 grid grid-cols-4 gap-6 max-xl:w-[90%] max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1'>
				{downLoad.map((item, id) => {
					return (
						<div className='bg-whites shadow-md ' key={id}>
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

								<div>
									<button
										onClick={() => {
											if (data?.user) {
												dispatch(addToCart(item))
												toast.success('Font đã được lưu vào tài khoản')
											} else {
												router.push('/Auth/login')
											}
										}}
										className='demo absolute bg-reds py-[3px] px-[6px] text-whit text-whites  text-xs shadow-xxl rounded-br-lg  z-1'
									>
										<span className='font-bold '>Lưu</span>
									</button>

									{/* <button
									onClick={() => {
										dispatch(removeFromCart(item))
										toast.success('Font đã được xóa khỏi tài khoản')
									}}
									className='demo absolute bg-reds py-[3px] px-[6px] text-whites text-xs shadow-BShadow  rounded-br-lg  z-1'
								>
									<span className='font-bold'>Đã lưu</span>
								</button> */}

									{item.special && (
										<button className='demo1 absolute bg-[#028623] py-[3px] px-[6px] text-whites text-xs shadow-xxl rounded-bl-lg  z-1'>
											<Link href={'/font-vip'} legacyBehavior>
												<a className='font-bold '>VIP</a>
											</Link>
										</button>
									)}

									{item.selective ? (
										<button className='demo1 absolute bg-[#ffa800] py-[3px] px-[6px] text-whites text-xs shadow-xxl rounded-bl-lg  z-1'>
											<Link href={'/font-chon-loc'} legacyBehavior>
												<a className='font-bold '>Font chọn lọc</a>
											</Link>
										</button>
									) : null}
								</div>
								{/* <button className='demo1 absolute bg-[#028623] py-[3px] px-[6px] text-whites shadow-orange-400 text-xs rounded-bl-lg  z-1'>
								<Link href={'/font-vip'} legacyBehavior>
									<a className='font-bold text-whites'>VIP</a>
								</Link>
							</button> */}
							</div>
							<Link href={`font-viet-hoa/${item.nameFont}/${item.id}`}>
								<h2 className='ml-3 mt-4 font-semibold text-base text-blacks'>
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
					)
				})}
			</div>
		</>
	)
}

export default TopDownload

export async function getStaticProps() {
	const response = await fetch(`http://localhost:4000/HomeData`)
	const data = await response.json()

	const datas = data.filter(e => e.quantity > 126)

	return {
		props: {
			downLoad: datas,
		},
	}
}
