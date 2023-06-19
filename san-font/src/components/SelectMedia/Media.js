import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import TabChild from './tabChild'
const Media = () => {
	return (
		<>
			<Tabs className='flex '>
				<div className='w-[17%] h-[683px] border-blacks border-r-4  bg-gray-100 focus:bg-gray-100'>
					<h1 className='ml-6 pt-4 font-semibold text-sm'>Hành động</h1>
					<TabList className='text-sm mt-2  text-blues font-medium'>
						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100  focus:text-blueHover focus:border-solid focus:border-blueHover focus:border-[1px] focus:font-semibold focus:ring-rings  focus:ring-[1px]  focus:rounded-none'>
							Thêm media
						</Tab>

						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-blueHover focus:border-solid focus:border-blueHover focus:border-[1px] focus:font-semibold focus:ring-rings  focus:ring-[1px] focus:rounded-none'>
							Tạo gallery
						</Tab>
						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-blueHover focus:border-solid focus:border-blueHover focus:border-[1px] focus:font-semibold focus:ring-rings  focus:ring-[1px] focus:rounded-none'>
							Tạo danh sách Audio
						</Tab>
						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-blueHover focus:border-solid focus:border-blueHover focus:border-[1px] focus:font-semibold focus:ring-rings  focus:ring-[1px] focus:rounded-none'>
							Tạo danh sách phát video
						</Tab>
						<div className='mt-3 w-[80%] h-[1px] mx-auto bg-gray-300 focus:bg-gray-100'></div>
						<Tab className='flex mt-3 pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-blueHover focus:border-solid focus:border-blueHover focus:border-[1px] focus:font-semibold focus:ring-rings  focus:ring-[1px] focus:rounded-none'>
							Chèn từ URL
						</Tab>
					</TabList>
				</div>

				<div className=' w-[100%]'>
					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Thêm media</h1>

						<TabChild />
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Tạo gallery</h1>
						<TabChild />
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Tạo danh sách Audio</h1>
						<TabChild />
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>
							{' '}
							Tạo danh sách phát video
						</h1>
						<TabChild />
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Chèn từ URL</h1>

						<hr className='w-full mt-3' />

						<input
							className='focus:border-oranges focus:outline-none mt-4 border border-1 border-gray-500 h-14 w-[98%] mx-3 rounded p-3 placeholder:text-lg shadow-inner placeholder:text-gray-600 placeholder:font-medium'
							type='text'
							placeholder='https://'
						/>
						<p className='mt-5 ml-3 text-xs font-normal text-gray-500'>
							Tên đường dẫn
						</p>
						<input
							type='text'
							className='mt-[1px] text-xs border border-1 w-[40%] h-8 border-gray-700 focus:outline-none focus:border-oranges rounded px-2 ml-3'
						/>
					</TabPanel>
				</div>
			</Tabs>
		</>
	)
}
export default Media
