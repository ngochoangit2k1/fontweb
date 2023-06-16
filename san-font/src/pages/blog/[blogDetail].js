import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogDetail = ({ dataDetail }) => {
	return (
		<>
			<div className='w-[55%]	bg-white mx-auto mt-32'>
				{dataDetail.map((item, id) => {
					return (
						<>
							<div className='w-full px-8 py-8'>
								<div className='w-[75%] mx-auto'>
									<h1 className='text-3xl text-center text-black font-bold'>
										{item.title}
									</h1>
								</div>
								<div className='w-20 rounded-[30px] bg-[#eeee] text-center py-2 mx-auto mt-5'>
									<Link href={'/blog'}>
										<button className='text-base font-medium'>Design</button>
									</Link>
								</div>
								<hr className='mt-3' />
								<p className='font-normal text-base text-black mt-6'>
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
