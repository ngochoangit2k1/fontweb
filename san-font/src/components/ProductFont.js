import Link from 'next/link'
import Image from 'next/image'

const ProductFont = ({ categoryFont }) => {
	return (
		<>
			{categoryFont.map(item => {
				return (
					<div className='bg-white shadow-md' key={item.id}>
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
										<div className='w-full h-44 absolute top-0 bg-black/60  duration-500  opacity-0 group-hover:opacity-100 '>
											<h2 className='text-white text-center text-lg font-semibold mt-[25%] '>
												XEM DEMO
											</h2>
										</div>
									</label>
								</div>
							</div>

							<input type='checkbox' id='my-modal-3' class='modal-toggle' />
							<div class='modal rounded'>
								<div class='modal-box relative'>
									<label
										htmlFor='my-modal-3'
										class='btn btn-sm btn-circle absolute right-2 top-2'
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

							<button className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-white text-xs rounded-br-lg  z-1'>
								<Link className='' href='' legacyBehavior>
									<a className='font-bold '>Lưu</a>
								</Link>
							</button>
						</div>
						<Link href={`/fontVH/${item.id}`}>
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

export default ProductFont
