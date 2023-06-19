import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { addToCart } from '../../../redux/cart.slice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
const ProductName = ({ NameFont }) => {
	const { data } = useSession()
	const router = useRouter()
	const dispatch = useDispatch()
	return (
		<>
			{NameFont.map((item, id) => {
				return (
					<div className='bg-whites shadow-md' key={id}>
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
										<div className='w-full h-44 absolute top-0 bg-black/60  cursor-pointer duration-500  opacity-0 group-hover:opacity-70 '>
											<h2 className='text-whites text-center text-sm font-semibold mt-[26%] '>
												XEM DEMO
											</h2>
										</div>
									</label>
								</div>
							</div>

							<input type='checkbox' id='my-modal-3' className='modal-toggle' />
							<div className='modal rounded'>
								<div className='modal-box relative'>
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
						<Link href={`/font-quang-cao/${item.nameFont}/${item.id}`}>
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
								<span className='font-bold'>Việt hóa:</span>
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
		</>
	)
}

export default ProductName
