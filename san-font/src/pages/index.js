import Head from 'next/head'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

import ProductHome from '@/components/products/ProductHome'

import productsApis from '../../apis/productApis'
import axiosClient from '../../apis/axiosClient'
import {
	CONTENT_PAGE,
	GLOBAL_STATUS,
} from '@/backend/constants/common.constant'
import categoryApis from '../../apis/categoryApis'

function Home({ CategoryData, data }) {
	// const [HomeData, setHomeData] = useState(data)
	// const funcFilter = nameFont => {
	// 	const nameFonts = data.filter(item => item.nameFont === nameFont)
	// 	setHomeData(nameFonts)
	// }

	const [seeMore, setSeeMore] = useState(16)
	const showMore = data.slice(0, seeMore)
	console.log('showmore', showMore)
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
			<div className=' w-full mt-32'>
				<div className='relative mx-auto w-[70%] max-lg:w-[80%]'>
					<input
						type='text'
						id='small-input'
						placeholder='Tìm font tại đây'
						className='pl-4 font-normal w-full py-3 border border-whites hover:border-oranges rounded-[30px] focus:outline-none focus:border-oranges text-base '
					/>

					<div className='absolute top-3 right-6'>
						<BsSearch className='w-7 h-6 text-[#9ca3af]' />
					</div>
				</div>
			</div>
			{/* Menu font */}
			{/* <MenuFont CategoryData={CategoryData}  /> */}
			<div className='mt-10 w-[65%]   mx-auto max-xl:w-[90%]'>
				{CategoryData.map(e => {
					return (
						<>
							<button className='py-3 px-4 mx-3 my-2 cursor-pointer bg-whites rounded-[30px]  focus:bg-oranges focus:text-whites text-blacks'>
								{e.name}
							</button>
						</>
					)
				})}
			</div>
			{/* products */}
			<div className='flex gap-3'>
				<h2 className='font-medium text-3xl ml-[7%] mt-16'>
					{showMore.length} font
				</h2>
			</div>
			<div className='w-[85%]	 mx-auto mt-6 grid grid-cols-4 gap-6 max-xl:w-[90%] max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1'>
				<ProductHome data={data} />
			</div>
			{/* Xem thêm */}
			<div className='w-full text-center mt-6'>
				<button
					onClick={loadMore}
					className='bg-oranges  hover:bg-reds py-2 px-6 font-normal text-base text-whites rounded-[8px]'
				>
					Xem thêm
				</button>
			</div>{' '}
			<div className='w-[85%] h-96 bg-whites mx-auto mt-12'></div>
		</>
	)
}

export default Home

export async function getStaticProps() {
	const ListCategorys = await categoryApis.getAllCategorys({
		pageCode: [GLOBAL_STATUS.ACTIVE],
	})
	console.log('ListCategorys', ListCategorys)
	const params = {
		size: 20,
		getMainImage: true,
		status: GLOBAL_STATUS.ACTIVE,
	}
	const product = await productsApis.getAllProducts(params)
	console.log(product)
	// const data = {
	// 	product: product.data,
	// }
	// console.log(data)

	return {
		props: { data: product.rows, CategoryData: ListCategorys },

		revalidate: 60,
	}
}

// export async function getStaticProps() {
// 	const response = await axios.get('http://localhost:4000/HomeData')
// 	console.log(response)

// 	return {
// 		props: {
// 			Data: response.data,
// 		},
// 	}
// }
