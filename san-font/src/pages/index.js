import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MenuFont from '@/components/MenuFont'
import { data } from '@/data/products'
function Home() {
	return (
		<>
			<Head>
				<title>sanFont</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* search */}
			<div className='w-full mt-16'>
				<div className='mx-auto w-[65%]'>
					<input
						type='text'
						id='small-input'
						placeholder='Tìm font tại đây'
						className='pl-4 font-normal w-full py-3 border border-none rounded-[30px] outline-none text-base '
					/>
				</div>
			</div>

			{/* Menu font */}
			<div className='w-[60%] mx-auto mt-10'>
				<ul className=' flex w-full gap-6 justify-center'>
					<MenuFont test={'All font'} />
					<MenuFont test={'Font 1FTV'} />
					<MenuFont test={'UTM font'} />
					<MenuFont test={'Font MJ'} />
					<MenuFont test={'Font trang trí'} />
					<MenuFont test={'Font viết tay'} />
					<MenuFont test={'Font có chân'} />
				</ul>

				<ul className=' flex w-full gap-6 justify-center mt-4'>
					<MenuFont test={'Font không chân'} />
					<MenuFont test={'Font bất động sản'} />
					<MenuFont test={'Font ẩm thực'} />
					<MenuFont test={'Font mỹ phẩm - Spa'} />
					<MenuFont test={'Font ICIEL'} />
					<MenuFont test={'Font MTD'} />
				</ul>

				<ul className=' flex w-full gap-6 justify-center mt-4'>
					<MenuFont test={'Font SVN'} />
					<MenuFont test={'Font Việt Linh'} />
					<MenuFont test={'Font LNTH'} />
					<MenuFont test={'Font FS'} />
					<MenuFont test={'FFont KS'} />
					<MenuFont test={'Font Google'} />
					<MenuFont test={'Font Vintage'} />
				</ul>

				<ul className=' flex w-full gap-6 justify-center mt-4'>
					<MenuFont test={'Font thư pháp'} />
					<MenuFont test={'Font việt hóa khác'} />
					<MenuFont test={'Font việt hoá'} />
					<MenuFont test={'Font quảng cáo'} />
					<MenuFont className={'bg-[#ffa800]'} test={'Font chọn lọc'} />
					<MenuFont className='bg-[#34a853]' test={'VIP'} />
				</ul>
			</div>

			{/* products */}
			<h2 className='font-medium text-3xl ml-[10%] mt-16'>All font</h2>
			<div className='w-[80%] mx-auto mt-6 grid grid-cols-4 gap-6'>
				{data.map((item, index) => {
					return (
						<>
							<div className='bg-white' key={index}>
								<Image
									src={item.image}
									alt='logo'
									width={300}
									height={250}
									className='w-full h-60 object-cover z-1'
								></Image>
								<button className='demo bg-[#ff0000] py-[3px] px-[6px] text-white text-xs rounded-br-lg  '>
									<Link className='   ' href='' legacyBehavior>
										<a className='font-bold'>Lưu</a>
									</Link>
								</button>
								<h2 className='ml-3 mt-4 font-normal text-base'>
									{item.title}
								</h2>
								<div className='ml-3 py-4 font-normal text-xs leading-6 '>
									<p>{item.author}</p>
									<p>{item.user}</p>
									<p>{item.translate}</p>
									<p>{item.date}</p>
									<p>{item.quantity}</p>
								</div>
								<div className=' text-sm text-center bg-oranges py-3 text-white'>
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

export default Home
