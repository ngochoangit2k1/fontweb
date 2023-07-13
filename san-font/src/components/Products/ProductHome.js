import Link from 'next/link'
import Image from 'next/image'
import { addToCart } from '../../../redux/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useRouter } from 'next/router'

const ProductHome = ({ data }) => {
	const dispatch = useDispatch()

	const router = useRouter()
	const { token, info } = useSelector(state => state.account)

	return (
		<>
			{data.map((item, id) => {
				console.log('item', item)
				return (
					<div className='bg-whites shadow-md ' key={id}>
						<div className='relative'>
							<div className=' group overflow-hidden'>
								<div className=' cursor-pointer  duration-500 hover:scale-[1.1] relative '>
									<label htmlFor='my-modal-3' className=' '>
										<Image
											src={item.link}
											alt=''
											width={500}
											height={300}
											className=' w-full h-44 object-cover '
										></Image>
										<div className='w-full h-44 absolute top-0 bg-black/70 cursor-pointer  duration-500  opacity-0 group-hover:opacity-80 '>
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
											src={item.link}
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
										if (token) {
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

								{/* {item.special && (
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
								) : null} */}
							</div>
							{/* <button className='btn-vip absolute bg-[#028623] py-[3px] px-[6px] text-whites shadow-orange-400 text-xs rounded-bl-lg  z-1'>
								<Link href={'/font-vip'} legacyBehavior>
									<a className='font-bold text-whites'>VIP</a>
								</Link>
							</button> */}
						</div>
						<Link href={`font-viet-hoa/${item.nameFont}/${item.id}`}>
							<h2 className='ml-3 mt-1 font-semibold text-base text-blacks'>
								{item.name}
							</h2>
						</Link>
						<div className='ml-3 py-4 font-normal text-xs leading-6 text-[#818181]'>
							<p>
								<span className='font-bold'>Tác giả:</span>
								{item.author}
							</p>
							<p>
								<span className='font-bold'>Người đăng: </span>
								{item.user?.username}
							</p>
							<p>
								<span className='font-bold'>Việt hóa :</span>
								{}
							</p>
							<p>
								<span className='font-bold'>Ngày đăng:</span>
								{item.createdAt}
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

export default ProductHome
