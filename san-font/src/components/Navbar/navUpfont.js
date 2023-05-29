import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const NavBar = () => {
	return (
		<>
			<Tabs className='flex '>
				<div className='w-[17%] h-[683px] border-black border-r-4  bg-gray-100 focus:bg-gray-100'>
					<h1 className='ml-6 pt-4 font-semibold text-sm'>Hành động</h1>
					<TabList className='text-sm mt-2  text-[#2270b0] font-medium'>
						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100  focus:text-[#014d8b] focus:border-solid focus:border-[#2270b0] focus:border-[1px] focus:font-semibold focus:ring-[#add7f9]  focus:ring-[1px]  focus:rounded-none'>
							Thêm media
						</Tab>

						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-[#014d8b] focus:border-solid focus:border-[#2270b0] focus:border-[1px] focus:font-semibold focus:ring-[#add7f9]  focus:ring-[1px] focus:rounded-none'>
							Tạo gallery
						</Tab>
						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-[#014d8b] focus:border-solid focus:border-[#2270b0] focus:border-[1px] focus:font-semibold focus:ring-[#add7f9]  focus:ring-[1px] focus:rounded-none'>
							Tạo danh sách Audio
						</Tab>
						<Tab className='flex pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-[#014d8b] focus:border-solid focus:border-[#2270b0] focus:border-[1px] focus:font-semibold focus:ring-[#add7f9]  focus:ring-[1px] focus:rounded-none'>
							Tạo danh sách phát video
						</Tab>
						<div className='mt-3 w-[80%] h-[1px] mx-auto bg-gray-300 focus:bg-gray-100'></div>
						<Tab className='flex mt-3 pl-6 cursor-pointer items-center w-full h-9 hover:bg-gray-200 focus:bg-gray-100 focus:text-[#014d8b] focus:border-solid focus:border-[#2270b0] focus:border-[1px] focus:font-semibold focus:ring-[#add7f9]  focus:ring-[1px] focus:rounded-none'>
							Chèn từ URL
						</Tab>
					</TabList>
				</div>

				<div className=' w-[65%]'>
					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Thêm media</h1>
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Tạo gallery</h1>
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Tạo danh sách Audio</h1>
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>
							{' '}
							Tạo danh sách phát video
						</h1>
					</TabPanel>

					<TabPanel>
						<h1 className='text-xl font-bold mt-3 ml-4'>Chèn từ URL</h1>
					</TabPanel>
				</div>
			</Tabs>
		</>
	)
}
export default NavBar
