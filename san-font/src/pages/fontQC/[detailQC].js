// import ProductDetail from '@/components/ProductDetails/ProductDetail'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'
import { useSession } from 'next-auth/react'
const DetailQC = ({ dataDetail }) => {
	const { data } = useSession()
	return (
		<>
			<div className=' w-[85%] mx-auto mt-10 '>
				<div className=' '>
					<div className=' bg-white px-3 py-3'>
						<h1 className='text-2xl font-bold mt-2'>{dataDetail.title} </h1>
						<div className='flex mt-3'>
							<div className='w-72 h-52'>
								<Image
									src={dataDetail.image}
									width={300}
									height={500}
									alt={dataDetail.title}
									className='w-full h-full '
								/>
							</div>
							<div className=' text-[#818181] leading-6 text-[12px] ml-4'>
								<div>
									{' '}
									<p>
										<span className='font-bold mr-1'>Tác giả:</span>{' '}
										<span>{dataDetail.author}</span>
									</p>
									<p>
										<span className='font-bold mr-1'>Người đăng:</span>
										{dataDetail.user}
									</p>
									<p>
										<span className='font-bold mr-1'>Việt hóa :</span>
										{dataDetail.translate}
									</p>
									<p>
										<span className='font-bold mr-1'>Số lượt tải font:</span>
										{dataDetail.quantity}

										<span className='ml-12 font-bold mr-1'>Ngày đăng:</span>
										{dataDetail.date}
									</p>
								</div>

								<Link href={'https://www.facebook.com/sharer/'}>
									<button className='flex mt-3.5 text-sm font-medium gap-1 px-2 py-1.5 text-center rounded-[4px] bg-[#0163e0] text-white'>
										{' '}
										<FaFacebook className='mt-[2px]' />{' '}
										<span>Chia sẽ facebook</span>
									</button>
								</Link>
								<div className='mt-5 text-sm  text-center bg-oranges hover:bg-[#ff0000] cursor-pointer py-3 px-24 text-white'>
									<Link href='/' legacyBehavior>
										<a className='font-medium'>TẢI FONT NÀY NGAY</a>
									</Link>
								</div>
							</div>
						</div>
						<hr className=' w-full mt-2 mx-auto' />
						<p className='mt-3 font-medium text-lg text-black'>
							<span className='font-bold'>Lưu ý:</span>Font này chỉ sử dụng cho
							mục đích cá nhân. Sử dụng cho mục đích thương mại nên mua bản
							quyền gốc từ tác giả.
						</p>
						<hr className=' w-full mt-2 mx-auto' />

						<p className=' mt-2 font-normal text-black'>{dataDetail.content}</p>

						<Image
							src={dataDetail.image}
							width={500}
							height={500}
							alt={dataDetail.title}
							className='w-full h-90 mt-3 '
						/>
						<Image
							src={dataDetail.image1}
							width={500}
							height={500}
							alt={dataDetail.title}
							className='w-full h-90 mt-3 '
						/>
						<Image
							src={dataDetail.image2}
							width={500}
							height={500}
							alt={dataDetail.title}
							className='w-full h-90 mt-3 '
						/>

						<div className='mt-4 bg-white px-3 py-3 text-black'>
							<h3 className='text-lg font-semibold'>Bình luận</h3>

							{data?.user ? (
								<div>
									<p className='mt-2'>
										Đăng nhập với tên {data?.user?.name}.
										<Link href={''}>
											{' '}
											<span className='text-[#2270b0]'>
												{' '}
												Chỉnh sửa hồ sơ của bạn
											</span>
											.
										</Link>
										<Link onClick={() => signOut()} href={''}>
											{' '}
											<span className='text-[#2270b0]'>Đăng xuất? </span>
										</Link>{' '}
										Các trường bắt buộc được đánh dấu *
									</p>

									<h4 className='mt-4 font-normal'>Bình luận *</h4>
									<textarea
										id='message'
										rows='4'
										className='block p-2.5 w-full text-sm text-black rounded-lg border border-gray-300 focus:outline-none  focus:border-oranges hover:border-oranges dark:bg-gray-700  '
									></textarea>

									<button className='mt-5 font-medium max-sm:mx-3 px-2 max-sm:w-28 max-sm:h-8 h-10 bg-[#ff8d08]    text-white'>
										Phản hồi
									</button>
								</div>
							) : (
								<div>
									<p className='flex'>
										Bạn phải{' '}
										<Link href={'/Auth/login'} legacyBehavior>
											<a className='px-1 text-[#2270b0]'>đăng nhập</a>
										</Link>{' '}
										để gửi phản hồi.
									</p>
								</div>
							)}
						</div>
					</div>
					{/* <ProductDetail dataDetail={dataDetail} /> */}
				</div>
				<div className=' bg-yellow-200 h-[1000px] px-3'>
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
