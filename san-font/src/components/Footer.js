import React from 'react'

const Footer = () => {
	return (
		<>
			<footer>
				<div className='w-full bg-white '>
					<div className='grid grid-cols-3 w-[80%] mx-auto gap-24 mt-20 py-12 max-lg:grid-cols-1 max-lg:gap-10'>
						<div>
							<h1 className='text-2xl font-medium'>GIỚI THIỆU</h1>
							<div className='font-normal text-base mt-4'>
								Website cung cấp font chữ và thành viên có thể tải về sử dụng
								hoàn toàn miễn phí. Font chữ được sưu tầm từ nhiều nguồn do
								thành viên đăng tải lên. Đừng quên theo dõi SanFont.Com hàng
								ngày để cập nhật nhiều font chữ hơn nhé{' '}
							</div>
						</div>

						<div className=''>
							<h1 className='text-2xl font-medium'>LIÊN HỆ</h1>
							<li className='font-normal text-base mt-4'>info@sanfont.com</li>
						</div>

						<div className=''>
							{' '}
							<h1 className='text-2xl font-medium'>HỖ TRỢ</h1>
							<div className='font-normal text-base mt-4'>
								<li> Hướng dẫn cài font chữ cho máy tính</li>
								<li> Donate </li>
								<li> Top Download</li>
								<li> Blog</li>
							</div>
						</div>
					</div>
					<div className=' w-[100%]  bg-[#ededed] mx-auto mt-10 py-4'>
						<div className='flex justify-center text-black text-sm'>
							<span>© 2023 XooSoft. All rights reserved.</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
