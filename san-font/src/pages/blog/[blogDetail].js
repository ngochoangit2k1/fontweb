import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BlogDetail = ({ dataDetail }) => {
	const [datas, setDatas] = useState()
	async function data1() {
		const response = await fetch('http://localhost:4000/Blog')
		const data = await response.json()

		setDatas(data)
	}
	useEffect(() => {
		data1()
	}, [])

	return (
		<>
			<div className='w-[55%]	bg-whites mx-auto mt-32 max-xl:w-90%'>
				{dataDetail.map(item => {
					return (
						<>
							<div className='w-full px-8 py-8 max-xl:w-[100%]' key={item.id}>
								<div className='w-[75%] mx-auto'>
									<h1 className='text-3xl text-center text-blacks font-bold'>
										{item.title}
									</h1>
								</div>
								<div className='w-20 rounded-[30px] bg-[#eeee] text-center py-2 mx-auto mt-5'>
									<Link href={'/blog'}>
										<button className='text-base font-medium'>Design</button>
									</Link>
								</div>
								<hr className='mt-3' />
								<p className='font-normal text-base text-blacks mt-6'>
									{item.text}
								</p>
								<div className='w-full h-[1px] bg-gray-300 mt-3'></div>

								<Image
									src={item.image}
									alt='logo'
									width={500}
									height={400}
									className='w-full object-cover mt-5'
								></Image>
							</div>
						</>
					)
				})}
			</div>

			<div className=''>
				<h1 className=' mt-10 font-extrabold text-4xl text-center'>
					BÀI VIẾT LIÊN QUAN
				</h1>
				<div className='w-[85%] mt-10 grid grid-cols-3 gap-6 mx-auto max-xl:grid max-xl:grid-cols-1 max-xl:w-[90%]'>
					{datas?.slice(2, 5).map(item => (
						<div className='bg-whites shadow-md rounded max-xl:w-full '>
							<div className=' overflow-hidden relative w-full '>
								<Link href={`/blog/${item.id}`}>
									<Image
										src={item.image}
										alt='logo'
										width={500}
										height={400}
										className='w-full h-60 object-cover  duration-500 hover:scale-[1.1] max-xl:h-80'
									></Image>
								</Link>
							</div>
							<Link href={`/blog/${item.id}`}>
								<h2 className='text-blacks ml-4 mt-4 font-extrabold text-xl '>
									{item.title}
								</h2>
							</Link>
							<div className='text-blacks ml-4 py-4 font-medium text-base max-xl:px-3'>
								<p>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default BlogDetail

export async function getStaticPaths() {
	const response = await fetch('http://localhost:4000/Blog')
	const data = await response.json()
	const detailPath = data.map(ev => {
		return {
			params: {
				blog: ev.title,
				blogDetail: ev.id.toString(),
			},
		}
	})

	return {
		paths: detailPath,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const id = context.params.blogDetail
	const dataDetails = await fetch(`http://localhost:4000/Blog?id=${id}`)
	const data = await dataDetails.json()

	return {
		props: {
			dataDetail: data,
		},
	}
}
