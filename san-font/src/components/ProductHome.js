import Link from 'next/link'
import Image from 'next/image'
import { addToCart, removeFromCart } from '../../redux/cart.slice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const ProductHome = ({ showMore }) => {
	const dispatch = useDispatch()
	const { data } = useSession()
	const router = useRouter()

	return (
		<>
			{showMore.map((item, id) => {
				return (
					<div className='bg-white shadow-md ' key={id}>
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
										<div className='w-full h-44 absolute top-0 bg-black/60 cursor-pointer  duration-500  opacity-0 group-hover:opacity-80 '>
											<h2 className='text-white text-center text-sm font-semibold mt-[26%] '>
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
									className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-whit text-white  text-xs shadow-xxl rounded-br-lg  z-1'
								>
									<span className='font-bold '>Lưu</span>
								</button>

								{/* <button
									onClick={() => {
										dispatch(removeFromCart(item))
										toast.success('Font đã được xóa khỏi tài khoản')
									}}
									className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-white text-xs shadow-BShadow  rounded-br-lg  z-1'
								>
									<span className='font-bold'>Đã lưu</span>
								</button> */}

								{item.special && (
									<button className='demo1 absolute bg-[#028623] py-[3px] px-[6px] text-white text-xs shadow-xxl rounded-bl-lg  z-1'>
										<Link href={'/font-vip'} legacyBehavior>
											<a className='font-bold '>VIP</a>
										</Link>
									</button>
								)}

								{item.selective ? (
									<button className='demo1 absolute bg-[#ffa800] py-[3px] px-[6px] text-white text-xs shadow-xxl rounded-bl-lg  z-1'>
										<Link href={'/font-chon-loc'} legacyBehavior>
											<a className='font-bold '>Font chọn lọc</a>
										</Link>
									</button>
								) : null}
							</div>
							{/* <button className='demo1 absolute bg-[#028623] py-[3px] px-[6px] text-white shadow-orange-400 text-xs rounded-bl-lg  z-1'>
								<Link href={'/font-vip'} legacyBehavior>
									<a className='font-bold text-white'>VIP</a>
								</Link>
							</button> */}
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
						<div className=' text-sm text-center bg-oranges hover:bg-[#ff0000] cursor-pointer py-3 text-white'>
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

export default ProductHome
