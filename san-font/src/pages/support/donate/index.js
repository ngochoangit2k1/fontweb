import React from 'react'

const Donate = () => {
	return (
		<>
			<div className='w-[55%] mx-auto bg-white mt-10 '>
				<div className='w-full py-7 font-bold text-3xl text-black text-center'>
					Donate
				</div>
				<hr className='bg-gray-500 h-[1px]' />

				<div className='w-full pl-10 mt-8'>
					<div className='text-base font-normal text-black mt-4'>
						<span className='font-semibold'>sanfont.com</span> ra đời vào năm
						2023 nhằm mục đích chia sẻ font chữ Việt hóa được sưu tầm từ nhiều
						nguồn và font chữ do Team sanfont tự việt hoá.
					</div>
					<div className='font-semibold text-base text-black py-3'>
						Những điều mà fonttiengviet.com hướng tới người dùng:
						<li className='font-normal pl-3 mt-3'>
							Hiển thị trực quan bộ sưu tập font chữ
						</li>
						<li className='font-normal pl-3'>
							Dễ dàng tìm kiếm font theo thể loại
						</li>
						<li className='font-normal pl-3'>
							Dễ dàng tải font một cách nhanh với tốc độ cao
						</li>
						<li className='font-normal pl-3'>
							Xem minh họa font cực kỳ dễ dàng
						</li>
						<li className='font-normal pl-3'>
							Bộ sưu tập font chữ font phong phú từ nhiều nguồn
						</li>
					</div>

					<hr className='bg-gray-500 w-[80%] mx-auto h-[1px]' />
				</div>
			</div>
		</>
	)
}
export default Donate
