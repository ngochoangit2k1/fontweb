import imgGlobal from '@/data/images'
import Image from 'next/image'
const instruct = () => {
	return (
		<>
			<div className='w-[55%] mx-auto bg-whites mt-32 '>
				<div className='w-full py-7 font-bold text-3xl text-blacks text-center'>
					Hướng dẫn cài font chữ cho máy tính
				</div>
				<hr className='bg-gray-500 h-[1px]' />

				<div className='w-full pl-10 mt-14'>
					<div className='text-3xl font-extrabold text-blacks mt-5'>
						Cài cho Windows
					</div>
					<div className='text-2xl font-semibold text-blacks mt-4'>
						Bước 1: Tải font chữ mà bạn muốn sử dụng từ <br /> website
						Sanfont.com
						<li className='text-base font-medium pl-4 mt-2'>
							Nếu file có định dạng .ttf hoặc otf thì bạn sẽ qua bước 2
						</li>
						<li className='text-base font-medium mt-1 pl-4'>
							Nếu file có định dạng .rar hoặc .zip thì bạn cần phải giải nén ra
							để có lấy font
						</li>
					</div>
					<div className='text-2xl font-semibold text-blacks mt-5'>
						Bước 2: Cài đặt
						<p className='text-base font-medium mt-2'>
							Chọn các font mà bạn muốn cài, sau đó chuột phải và chọn
						</p>
						<Image
							src={imgGlobal.HD}
							className='max-md:w-32 w-90 py-6'
							alt='logo'
						></Image>
					</div>
				</div>
			</div>
		</>
	)
}
export default instruct
