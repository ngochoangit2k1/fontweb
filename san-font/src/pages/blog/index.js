import Head from 'next/head'
import Image from 'next/image'
import { BlogData } from '@/data/products'

const Blog = () => {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1 className='text-4xl font-bold text-center mt-20'>Blog</h1>
			<div className='w-20 rounded-[30px] bg-white text-center py-2 mx-auto mt-5'>
				<button className='text-base font-normal'>Design</button>
			</div>

			<div className='w-[85%] mx-auto mt-10 grid grid-cols-3 gap-6'>
				{BlogData.map((item, index) => {
					return (
						<>
							<div className='bg-white shadow-md' key={index}>
								<div className=' overflow-hidden relative w-full '>
									<Image
										src={item.image}
										alt='logo'
										width={500}
										height={400}
										className='w-full h-60 object-cover  duration-500 hover:scale-[1.1]'
									></Image>
								</div>

								<h2 className='text-black ml-4 mt-4 font-extrabold text-xl'>
									{item.title}
								</h2>
								<div className='text-black ml-4 py-4 font-medium text-base'>
									<p>{item.text}</p>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}

export default Blog
