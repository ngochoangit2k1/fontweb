import ProductDetail from '@/components/Products/ProductDetail'
import React, { useEffect, useState } from 'react'
import FontRelate from '@/components/Products/FontRelate'

const Detail = ({ dataDetail }) => {
	const [relate, setRelate] = useState()
	async function data1() {
		const response = await fetch('http://localhost:4000/HomeData')
		const data = await response.json()
		{
			data.filter(e => e.category === 'FontQC')
		}
		setRelate(data)
	}
	useEffect(() => {
		data1()
	}, [])

	return (
		<>
			<div className='flex w-[85%] mt-32 mx-auto max-xl:w-[90%] max-xl:flex-col'>
				<div className='w-[50%]  max-xl:w-full'>
					<ProductDetail dataDetail={dataDetail} />
				</div>

				<div className='w-[50%]  px-3 max-xl:w-full'>
					<h1 className='text-2xl font-bold max-xl:mt-5'> Font liên quan </h1>
					<div className='w-full mt-2 grid grid-cols-2 gap-5 max-xl:w-full max-md:grid max-md:grid-cols-1'>
						<FontRelate relate={relate} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Detail

export async function getStaticPaths() {
	const response = await fetch('http://localhost:4000/HomeData')
	const data = await response.json()
	const detailPath = data.map(ev => {
		return {
			params: {
				fontSmall: ev.nameFont,
				detail: ev.id.toString(),
			},
		}
	})

	return {
		paths: detailPath,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const id = context.params.detail
	const dataDetails = await fetch(`http://localhost:4000/HomeData?id=${id}`)
	const data = await dataDetails.json()
	return {
		props: {
			dataDetail: data,
		},
	}
}
