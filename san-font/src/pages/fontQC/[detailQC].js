import ProductDetail from '@/components/ProductDetails/ProductDetail'

const DetailQC = ({ dataDetail }) => {
	return (
		<>
			<div className='flex w-[85%] mx-auto mt-10 '>
				<ProductDetail dataDetail={dataDetail} />
				<div className='w-[50%] bg-yellow-200 h-[1000px] px-3'>
					<h1 className='text-2xl font-bold mt-2'> Font liên quan </h1>
				</div>
			</div>
		</>
	)
}

export default DetailQC

export async function getStaticPaths() {
	const response = await fetch('http://localhost:4000/HomeData')
	const data = await response.json()
	const detailPath = data.map(ev => {
		return {
			params: {
				detail: `${ev.id}`,
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
	const dataDetails = await fetch(`http://localhost:4000/HomeData/${id}`)
	const data = await dataDetails.json()
	return {
		props: {
			dataDetail: data,
		},
	}
}
