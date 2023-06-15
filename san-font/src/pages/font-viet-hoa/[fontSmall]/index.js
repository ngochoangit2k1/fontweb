import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FontAmThuc = ({ NameFont }) => {
	return (
		<div>
			<h2 className='font-medium text-3xl ml-[10%] mt-16'>
				( {NameFont.length} font)
			</h2>

			<div className='w-[85%]	 mx-auto mt-10 grid grid-cols-4 gap-6  max-2xl:w-[95%] max-lg:grid-cols-2 max-sm:grid-cols-1'>
				{NameFont.map((item, id) => {
					return (
						<div className='bg-white shadow-md' key={id}>
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
									className='modal-toggle'
								/>
								<div className='modal rounded'>
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

								<button className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-white text-xs rounded-br-lg  z-1'>
									<Link className='' href='' legacyBehavior>
										<a className='font-bold '>Lưu</a>
									</Link>
								</button>
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
							<Link href={`/font-viet-hoa/${item.nameFont}/${item.id}`}>
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
			</div>
		</div>
	)
}

export default FontAmThuc

export async function getStaticPaths() {
	const response = await fetch(`http://localhost:4000/HomeData`)
	const data = await response.json()
	const allPaths = data.map(ev => {
		return {
			params: {
				fontSmall: ev.nameFont,
			},
		}
	})
	return {
		paths: allPaths,
		fallback: false,
	}
}
export async function getStaticProps(context) {
	const nameFont = context.params.fontSmall
	const response = await fetch(
		`http://localhost:4000/HomeData?nameFont=${nameFont}`
	)
	const data = await response.json()

	return {
		props: {
			NameFont: data,
		},
	}
}