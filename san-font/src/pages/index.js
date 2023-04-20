import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import MenuFont from '@/components/MenuFont'
import { HomeData } from '@/data/products'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import imgGlobal from '@/data/images'
import PreviousMap from 'postcss/lib/previous-map'

function Home() {
	const [HomeDatas, setHomeData] = useState(HomeData)
	const funcFilter = category => {
		const categorys = HomeData.filter(item => item.category === category)
		setHomeData(categorys)
	}

	const [seeMore, setSeeMore] = useState(8)

	const showMore = HomeDatas.slice(0, seeMore)

	const loadMore = () => {
		setSeeMore(prevValue => prevValue + 4)
	}

	return (
		<>
			<Head>
				<title>sanFont</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* search */}
			<div className=' w-full mt-16'>
				<div className='relative mx-auto w-[65%]'>
					<input
						type='text'
						id='small-input'
						placeholder='Tìm font tại đây'
						className='pl-4 font-normal w-full py-3 border border-white hover:border-oranges rounded-[30px] focus:outline-none focus:border-oranges text-base '
					/>

					<div className='absolute top-3 right-6'>
						<BsSearch className='w-5 h-6 text-[#9ca3af]' />
					</div>
				</div>
			</div>

			{/* Menu font */}
			<div className='w-[65%] mx-auto mt-10 '>
				<ul className=' flex flex-wrap w-full gap-5 justify-center max-2xl:w-[100%]'>
					<MenuFont onClick={() => setHomeData(HomeData)} test={'All font'} />
					<MenuFont
						onClick={() => funcFilter('Font 1FTV')}
						test={'Font 1FTV'}
					/>
					<MenuFont onClick={() => funcFilter('UTM font')} test={'UTM font'} />
					<MenuFont onClick={() => funcFilter('Font MJ')} test={'Font MJ'} />
					<MenuFont
						onClick={() => funcFilter('Font trang trí')}
						test={'Font trang trí'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font viết tay')}
						test={'Font viết tay'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font có chân')}
						test={'Font có chân'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font bất động sản')}
						test={'Font không chân'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font có chân')}
						test={'Font bất động sản'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font ẩm thực')}
						test={'Font ẩm thực'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font mỹ phẩm - Spa')}
						test={'Font mỹ phẩm - Spa'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font ICIE')}
						test={'Font ICIEL'}
					/>
					<MenuFont onClick={() => funcFilter('Font MTD')} test={'Font MTD'} />
					<MenuFont onClick={() => funcFilter('Font SVN')} test={'Font SVN'} />
					<MenuFont
						onClick={() => funcFilter('Font Việt Linh')}
						test={'Font Việt Linh'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font LNTH')}
						test={'Font LNTH'}
					/>
					<MenuFont onClick={() => funcFilter('Font FS')} test={'Font FS'} />
					<MenuFont onClick={() => funcFilter('Font KS')} test={'Font KS'} />
					<MenuFont
						onClick={() => funcFilter('Font Google')}
						test={'Font Google'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font Vintage')}
						test={'Font Vintage'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font thư pháp')}
						test={'Font thư pháp'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font việt hóa khác')}
						test={'Font việt hóa khác'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font việt hoá')}
						test={'Font việt hoá'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font quảng cáo')}
						test={'Font quảng cáo'}
					/>
					<MenuFont
						onClick={() => funcFilter('Font chọn lọc')}
						className={'bg-[#ffa800]'}
						test={'Font chọn lọc'}
					/>
					<MenuFont
						onClick={() => funcFilter('VIP')}
						className='bg-[#34a853]'
						test={'VIP'}
					/>
				</ul>
			</div>

			{/* products */}

			<h2 className='font-medium text-3xl ml-[10%] mt-16'>
				{HomeDatas.length} font
			</h2>

			<div className='w-[85%]	 mx-auto mt-6 grid grid-cols-4 gap-6 max-2xl:w-[95%] max-lg:grid-cols-2 max-sm:grid-cols-1'>
				{showMore.map((item, id) => {
					return (
						<>
							<div className='bg-white shadow-md' key={id}>
								<div
									htmlFor='my-modal-4'
									className='cursor-pointer overflow-hidden relative '
								>
									<Image
										src={item.image}
										alt='logo'
										width={300}
										height={250}
										className=' w-full h-44 object-cover duration-500 hover:scale-[1.1]'
									></Image>

									<button className='demo absolute bg-[#ff0000] py-[3px] px-[6px] text-white text-xs rounded-br-lg  z-30'>
										<Link className='' href='' legacyBehavior>
											<a className='font-bold '>Lưu</a>
										</Link>
									</button>
								</div>
								{/* Put this part before </body> tag */}
								<input
									type='checkbox'
									id='my-modal-4'
									className='modal-toggle'
								/>
								<label htmlFor='my-modal-4' className='modal cursor-pointer'>
									<label className='modal-box relative' htmlFor=''>
										<h3 className='text-lg font-bold'>
											Congratulations random Internet user!
										</h3>
										<p className='py-4'>
											You've been selected for a chance to get one year of
											subscription to use Wikipedia for free!
										</p>
									</label>
								</label>
								<h2 className='ml-3 mt-4 font-medium text-base'>
									{item.title}
								</h2>
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

			{/* Xem thêm */}
			<div className='w-full text-center mt-6'>
				<button
					onClick={loadMore}
					className='bg-oranges  hover:bg-[#ff0000] py-2 px-6 font-normal text-base text-white rounded-[8px]'
				>
					Xem thêm
				</button>
			</div>
		</>
	)
}

export default Home
