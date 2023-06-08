import Head from 'next/head'
import { MdCheck } from 'react-icons/md'
const Vip = () => {
	return (
		<>
			<Head>
				<title>VIP</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<h1 className='text-[40px] font-semibold text-center mt-14'>
					GÓI THÀNH VIÊN
				</h1>

				<div className='w-[65%] h-[600px] mx-auto grid grid-cols-3 gap-14 pt-14 max-xl:w-[90%] max-lg:grid-cols-1 max-lg:w-[60%] max-lg:h-full '>
					<div className='bg-white mt-10 h-[79%] max-lg:h-full'>
						<div className='bg-[#c4c4c4] w-full h-2'></div>
						<h1 className='font-semibold text-2xl text-center mt-4'>
							Gói bắt đầu
						</h1>
						<h1 className='font-bold text-2xl text-center mt-12'>Free</h1>
						<div className='text-sm font-normal text-center text-[#cec7c5] mt-2'>
							Sử dụng mãi mãi
						</div>

						<div className='mt-12 w-[70%] mx-auto'>
							<ul className='font-normal text-sm'>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Không giới hạn lượt tải
								</li>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Truy cập không giới hạn
								</li>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Chờ tải font sau 30 giây
								</li>
							</ul>
						</div>

						<div className='w-[48%] mx-auto '>
							<button className=' mt-16  w-full cursor-no-drop  h-10 bg-oranges  text-white'>
								<span className=' max-md:text-[13px] text-[15px]'>Đăng ký</span>
							</button>
						</div>
					</div>

					<div className='bg-white h-[92%] max-lg:h-[100%]'>
						<div className='bg-[#eb4335] w-full h-2'></div>
						<h1 className='font-semibold text-2xl text-center mt-14	'>
							Gói 12 tháng
						</h1>
						<div className='font-normal text-sm text-center text-[#909090] line-through mt-6'>
							200.000đ
						</div>
						<h1 className='font-bold text-2xl text-center mt-1'>99.000đ</h1>
						<div className='text-sm font-normal text-center text-[#cec7c5] mt-2'>
							Thanh toán lại sau 12 tháng
						</div>

						<div className='mt-12 w-[70%] mx-auto'>
							<ul className='font-normal text-sm'>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Không giới hạn lượt tải
								</li>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Truy cập không giới hạn
								</li>
								<li className=' flex font-extrabold text-sm  text-[#05A150]'>
									<MdCheck className='text-[20px] text-black mr-2' />
									Tải font ngay lập tức
								</li>
								<li className=' flex font-extrabold text-sm text-[#ED0505]'>
									<MdCheck className='text-[20px] text-black mr-2' />
									TẢI VIP
								</li>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Ủng hộ duy trì website
								</li>
							</ul>
						</div>

						<div className='w-[48%] mx-auto '>
							<button className=' mt-6  w-full cursor-pointer hover:bg-[#ff0000] h-10 bg-oranges  text-white'>
								<span className=' max-md:text-[13px] text-[15px]'>Đăng ký</span>
							</button>
						</div>
					</div>

					<div className='bg-white mt-10 h-[79%] max-lg:h-full'>
						<div className='bg-[#00a3ff] w-full h-2'></div>
						<h1 className='font-semibold text-2xl text-center mt-4'>
							Gói 6 tháng
						</h1>
						<div className='font-normal text-sm text-center text-[#909090] line-through mt-6'>
							160.000đ
						</div>
						<h1 className='font-bold text-2xl text-center mt-1'>79.000đ</h1>
						<div className='text-sm font-normal text-center text-[#cec7c5] mt-2'>
							Thanh toán lại sau 6 tháng
						</div>

						<div className='mt-12 w-[70%] mx-auto'>
							<ul className='font-normal text-sm '>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Không giới hạn lượt tải
								</li>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Truy cập không giới hạn
								</li>
								<li className='flex'>
									<MdCheck className='text-[20px] mr-2' />
									Tải font ngay lập tức
								</li>
								<li className='flex text-sm font-bold text-black'>
									<MdCheck className='text-[20px] mr-2' />
									Ủng hộ duy trì website
								</li>
							</ul>
						</div>

						<div className='w-[48%] mx-auto '>
							<button className=' mt-11  w-full cursor-pointer hover:bg-[#ff0000] h-10 bg-oranges  text-white'>
								<span className=' max-md:text-[13px] text-[15px]'>Đăng ký</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Vip
