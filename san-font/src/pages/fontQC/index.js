import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const fontQC = ({ categoryFont }) => {
	return (
		<>
			<Head>
				<title>Font quảng cáo</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h2 className='font-medium text-3xl ml-[10%] mt-16'>
				Font Quảng cáo ( {categoryFont.length} font)
			</h2>
			<div className='w-[85%] mx-auto mt-6 grid grid-cols-4 gap-6 max-2xl:w-[95%] max-lg:grid-cols-2 max-sm:grid-cols-1'>
				{categoryFont.map((item, id) => {
					return (
						<>
							<div className='bg-[#ffffff] shadow-lg' key={id}>
								{/* <div className='overflow-hidden relative '>
									<Link href={'productDetail'}>
										<Image
											src={item.image}
											alt='logo'
											width={308}
											height={183}
											className=' w-full h-44 object-cover duration-500 hover:scale-[1.1]'
										></Image>
									</Link>
									<button className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-white text-xs rounded-br-lg  z-30'>
										<Link className='' href='' legacyBehavior>
											<a className='font-bold '>Lưu</a>
										</Link>
									</button>
									<button className='demo1 absolute bg-[#34A853] py-[3px] px-[6px] text-white text-xs rounded-bl-lg  z-30'>
										<Link className='' href='' legacyBehavior>
											<a className='font-bold '>Lưu</a>
										</Link>
									</button>
								</div> */}

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
									<div class='modal rounded-none'>
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
								<div className=' text-sm text-center bg-oranges hover:bg-[#ff0000] cursor-pointer py-3 text-white'>
									<Link href='/' legacyBehavior>
										<a className='font-medium'>TẢI FONT NÀY NGAY</a>
									</Link>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}

export default fontQC

export async function getServerSideProps(context) {
	const { query } = context
	const { category } = query
	const queryString = category ? 'category=FontVH' : ''
	const response = await fetch(`http://localhost:4000/HomeData/${queryString}`)
	const data = await response.json()

	return {
		props: {
			categoryFont: data,
		},
	}
}