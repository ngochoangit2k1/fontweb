// import ProductDetail from '@/components/ProductDetails/ProductDetail'
import ProductDetail from '@/components/Products/ProductDetail'
import React from 'react'
const Detail = ({ dataDetail }) => {
	return (
		<>
			<div className='flex w-[85%] mt-32 mx-auto  max-xl:w-[90%] max-xl:flex-col'>
				<div className='w-[50%] bg-white px-3 py-3 max-xl:w-[100%]'>
					<h1 className='text-2xl font-bold mt-1'>
						{dataDetail.map(e => e.title)}
					</h1>

					<ProductDetail dataDetail={dataDetail} />
				</div>

				<div className='w-[50%] bg-yellow-200 h-[1000px] px-3'>
					<h1 className='text-2xl font-bold mt-2'> Font liên quan </h1>
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
