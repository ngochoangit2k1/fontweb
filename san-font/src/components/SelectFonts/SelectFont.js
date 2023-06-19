import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const SelectFont = () => {
	return (
		<>
			<h1 className='text-xl font-bold mt-3 ml-4'>Select File</h1>
			<Tabs className='text-blacks font-medium mt-2'>
				<TabList>
					<Tab>Tải file </Tab>
					<Tab>Media</Tab>
				</TabList>

				<TabPanel className=''>
					<div className='text-center mt-[15%] '>
						<h2 className='mt-2 text-lg font-normal'>
							Thả các tập tin để tải lên
						</h2>
						<h4 className=' text-xs font-normal mt-2'>hoặc</h4>
						<button className='mt-1 text-sm bg-gray-100 hover:bg-gray-200 text-blues  font-normal py-3  border border-blues hover:border-blueHover rounded'>
							<input
								type='file'
								id='file'
								accept='SelectImage/png, image/jpeg'
							/>
							<label className='py-3 px-9 hover:text-[#014d8b]' htmlFor='file'>
								Chọn tập tin
							</label>
						</button>
						{/* <input
							type='file'
							className='mt-1 text-sm bg-gray-100 hover:bg-gray-200 text-[#014d8b] font-normal  py-3 px-8 border border-blue-500  rounded'
						>
							Chọn tập tin
						/> */}
						<p className='text-xs font-normal mt-6'>
							Kích thước tập tin tải lên tối đa: 64 MB
						</p>
					</div>
				</TabPanel>
				<TabPanel className=''>
					<div className='flex h-[530px] -mt-2.5 '>
						{' '}
						<div className=' h-full w-[75%]'>
							{' '}
							<p className='text-blacks text-xs font-semibold ml-3 mt-2'>
								Lọc media
							</p>
							<div className='flex'>
								{' '}
								<select
									id='countries'
									className='ml-3 h-8 w-44 mt-2  focus:outline-none border border-gray-600 bg-whites text-gray-600 text-xs rounded focus:border-2 focus:ring-oranges focus:border-oranges block px-2 '
								>
									<option selected>Hình ảnh</option>
									<option value='US'>Đã tải lên từ bài này</option>
									<option value='CA'>Chưa được đính kèm</option>
									<option value='DE'>Của bạn</option>
								</select>
								<select
									id='countries'
									className='ml-3 h-8 w-44 mt-2  focus:outline-none border border-gray-600 bg-whites text-gray-600 text-xs rounded focus:border-2 focus:ring-oranges focus:border-oranges block px-2 '
								>
									<option selected>Tất cả các ngày</option>
									<option value='US'>Tháng Năm 2023</option>
									<option value='CA'>Tháng Tư 2023</option>
									<option value='DE'>Tháng Ba 2023</option>
									<option value='DE'>Tháng hai 2023</option>
									<option value='DE'>Tháng một 2023</option>
									<option value='DE'>Tháng Mười Hai 2022</option>
									<option value='DE'>Tháng Mười Một 2022</option>
									<option value='DE'>Tháng Mười 2022</option>
									<option value='DE'>Tháng Chín 2022</option>
								</select>
								<div className='ml-[45%]'>
									<p className='text-blacks text-xs font-semibold ml-3 -mt-4'>
										Tìm kiếm
									</p>
									<input
										type='text'
										className='h-8 w-44 mt-2  text-xs border border-1 border-gray-700 focus:outline-none focus:border-2 focus:ring-oranges focus:border-oranges rounded px-2 ml-3'
									/>
								</div>
							</div>
							<div className='text-center mt-[15%] '>
								<h2 className='mt-2 text-lg font-normal'>
									Thả các tập tin để tải lên
								</h2>
								<h4 className=' text-xs font-normal mt-2'>hoặc</h4>
								<button className='mt-1 text-sm bg-gray-100 hover:bg-gray-200 text-blues  font-normal py-3  border border-blues hover:border-blueHover rounded'>
									<input type='file' id='file' accept='image/png, image/jpeg' />
									<label
										className='py-3 px-9 hover:text-[#014d8b]'
										htmlFor='file'
									>
										Chọn tập tin
									</label>
								</button>

								<p className='text-xs font-normal mt-6'>
									Kích thước tập tin tải lên tối đa: 64 MB
								</p>
							</div>
						</div>
						<div className='w-[25%] h-full bg-gray-100'>
							<div className='w-[1px] h-full bg-slate-400'></div>
						</div>
					</div>
					<div className='w-full h-[1px] bg-slate-400'></div>
				</TabPanel>
			</Tabs>
		</>
	)
}

export default SelectFont
