import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'

const Detail = ({ data }) => {
	return (
		<>
			<div className='flex w-[85%] mx-auto mt-10 '>
				<div className=' w-[50%] bg-white h-[1000px] px-3'>
					<h1 className='text-2xl font-bold mt-2'>{data.title} </h1>
					<div className='flex mt-3'>
						<div className='w-72 h-52'>
							<Image
								src={data.image}
								width={300}
								height={500}
								alt={data.title}
								className='w-full h-full '
							/>
						</div>
						<div className=' text-[#818181] leading-6 text-[12px] ml-4'>
							<div>
								{' '}
								<p>
									<span className='font-bold mr-1'>Tác giả:</span>{' '}
									<span>{data.author}</span>
								</p>
								<p>
									<span className='font-bold mr-1'>Người đăng:</span>
									{data.user}
								</p>
								<p>
									<span className='font-bold mr-1'>Việt hóa :</span>
									{data.translate}
								</p>
								<p>
									<span className='font-bold mr-1'>Số lượt tải font:</span>
									{data.quantity}

									<span className='ml-12 font-bold mr-1'>Ngày đăng:</span>
									{data.date}
								</p>
							</div>

							<button className='flex mt-3.5 text-sm font-medium gap-1 px-2 py-1.5 text-center rounded-[4px] bg-[#0163e0] text-white'>
								{' '}
								<FaFacebook className='mt-[2px]' />{' '}
								<span>Chia sẽ facebook</span>
							</button>
							<div className='mt-5 text-sm  text-center bg-oranges hover:bg-[#ff0000] cursor-pointer py-3 px-24 text-white'>
								<Link href='/' legacyBehavior>
									<a className='font-medium'>TẢI FONT NÀY NGAY</a>
								</Link>
							</div>
						</div>
					</div>
					<hr className=' w-full mt-2 mx-auto' />
					<p className='font-medium text-lg text-black'>
						<span className='font-bold'>Lưu ý:</span>Font này chỉ sử dụng cho
						mục đích cá nhân. Sử dụng cho mục đích thương mại nên mua bản quyền
						gốc từ tác giả.
					</p>
					<hr className=' w-full mt-2 mx-auto' />
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
			data: data,
		},
	}
}
