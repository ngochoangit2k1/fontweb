import imgGlobal from '@/data/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { FaSignOutAlt } from 'react-icons/fa'

const Header = () => {
	const { data } = useSession()

	const [pathName, setPathName] = useState('')
	const router = useRouter()
	const [toggleMenu, setToggleMenu] = useState(true)

	useEffect(() => {
		setPathName(router.pathname)
	}, [router.pathname])

	return (
		<header>
			<nav className='bg-white shadow-xl  py-3.5'>
				<div className='w-[95%] flex flex-wrap justify-between items-center mx-auto lg:px-12 xl:px-20'>
					<Link href={'/'} className='max-lg:ml-3'>
						<Image
							src={imgGlobal.Logo}
							className='max-md:w-32 w-40'
							alt='logo'
						></Image>
					</Link>

					{/* <div className='flex items-center gap-1 xl:order-2'>
						<Link href={'/upFont'}>
							<button className='flex  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges rounded justify-center btn-gradient text-white'>
								<AiOutlineCloudUpload className='font-extrabold text-[28px] max-md:text-sm' />
								<span className='ml-2 max-md:text-[13px] text-[15px]'>
									Upload font
								</span>
							</button>
						</Link>

						{data?.user ? (
							<div className='flex'>
								<Link href={''}>
									<button className='flex  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-[#1876f2] rounded  justify-center btn-gradient text-white'>
										<FiUser className='text-[24px] font-bold max-md:text-sm mr-1' />
										{data?.user?.name}
									</button>
								</Link>

								<Link href={''}>
									<button
										onClick={() => signOut()}
										className='flex ml-1  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-[#ff8d08] rounded  justify-center btn-gradient text-white'
									>
										<FaSignOutAlt className='text-[24px] font-bold max-md:text-sm mr-1' />{' '}
										Đăng xuất
									</button>
								</Link>
							</div>
						) : (
							<Link href={'/Auth/login'}>
								<button className='flex  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-[#ff8d08] rounded  justify-center btn-gradient text-white'>
									<FiUser className='text-[24px] font-bold max-md:text-sm mr-1' />{' '}
									Đăng nhập
								</button>
							</Link>
						)}

						<button
							onClick={() => setToggleMenu(!toggleMenu)}
							data-collapse-toggle='mobile-menu-2'
							type='button'
							className='inline-flex max-lg:mr-3 items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='mobile-menu-2'
							aria-expanded='false'
						>
							<svg
								className='w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								/>
							</svg>
							<svg
								className='hidden w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div> */}

					<button
						onClick={() => setToggleMenu(!toggleMenu)}
						data-collapse-toggle='mobile-menu-2'
						type='button'
						className='inline-flex max-lg:mr-3 items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						aria-controls='mobile-menu-2'
						aria-expanded='false'
					>
						<svg
							className='w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						<svg
							className='hidden w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
					<div
						className={`${
							toggleMenu ? 'hidden' : ''
						} justify-between items-center w-full xl:flex xl:w-auto xl:order-1`}
						id='mobile-menu-2'
					>
						<ul className='flex flex-col mt-4 gap-6 font-bold xl:flex-row xl:space-x-8 xl:mt-0'>
							<li
								className={`max-xl:py-2 hover:text-oranges max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/' ? 'lg:relative' : ' '
								}`}
							>
								<Link href={'/'}>Home</Link>
								{pathName === '/' ? (
									<div
										className={`xl:absolute top-[45px] xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
							</li>

							<li
								className={`test-demo dropdown dropdown-hover max-xl:py-2 hover:text-oranges max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/fontVH' ? 'xl:relative' : ''
								}`}
							>
								<Link tabIndex={0} href={'/fontVH'}>
									Font việt hóa
								</Link>
								{pathName === '/fontVH' ? (
									<div
										className={`xl:absolute top-[45px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}

								{/* <ul
									tabIndex={0}
									className=' dropdown-content mt-6 py-2 text-black menu shadow-xl bg-base-100 w-52'
								>
									<li>
										<a>Font 1FTV</a>
									</li>
									<li>
										<a>Font trang trí</a>
									</li>
									<li>
										<a>Font viết tay</a>
									</li>
									<li>
										<a>Font có chân</a>
									</li>
									<li>
										<a>Font không chân</a>
									</li>
									<li>
										<a>Font ICIEL</a>
									</li>
									<li>
										<a>Font MTD</a>
									</li>
									<li>
										<a>Font SVN</a>
									</li>
								</ul> */}
							</li>

							<li
								className={`test-demo dropdown dropdown-hover max-xl:py-2 hover:text-oranges max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/fontQC' ? 'xl:relative' : ''
								}`}
							>
								<Link tabIndex={0} href={'/fontQC'}>
									Font quảng cáo
								</Link>
								{pathName === '/fontQC' ? (
									<div
										className={`xl:absolute top-[45px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
								{/* <ul
									tabIndex={0}
									className=' dropdown-content mt-6 py-2 text-black menu shadow-xl bg-base-100 w-52'
								>
									<li>
										<a>Font bất động sản</a>
									</li>
									<li>
										<a>Font ẩm thực</a>
									</li>
									<li>
										<a>Font mỹ phẩm - Spa</a>
									</li>
								</ul> */}
							</li>
							<li
								className={`max-xl:py-2 hover:text-oranges max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/goi-vip' ? 'xl:relative' : ''
								}`}
							>
								<Link href={'/goi-vip'}>Gói VIP</Link>
								{pathName === '/goi-vip' ? (
									<div
										className={`xl:absolute top-[45px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
							</li>
							<li
								className={`max-xl:py-2 hover:text-oranges max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/blog' ? 'xl:relative' : ''
								}`}
							>
								<Link href={'/blog'}>Blog</Link>
								{pathName === '/blog' ? (
									<div
										className={`xl:absolute top-[45px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
							</li>
						</ul>

						<div className='flex ml-10 items-center gap-1 xl:order-2'>
							<Link href={'/upFont'}>
								<button className='flex  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges rounded justify-center btn-gradient text-white'>
									<AiOutlineCloudUpload className='font-extrabold text-[28px] max-md:text-sm' />
									<span className='ml-2 max-md:text-[13px] text-[15px]'>
										Upload font
									</span>
								</button>
							</Link>

							{data?.user ? (
								<div className='flex'>
									<Link href={'/profiles/profile'}>
										<button className='flex  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-[#1876f2] rounded  justify-center btn-gradient text-white'>
											<FiUser className='text-[24px] font-bold max-md:text-sm mr-1' />
											{data?.user?.name}
										</button>
									</Link>

									<Link href={''}>
										<button
											onClick={() => signOut()}
											className='flex ml-1  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-[#ff8d08] rounded  justify-center btn-gradient text-white'
										>
											<FaSignOutAlt className='text-[24px] font-bold max-md:text-sm mr-1' />{' '}
											Đăng xuất
										</button>
									</Link>
								</div>
							) : (
								<Link href={'/Auth/login'}>
									<button className='flex  max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-[#ff8d08] rounded  justify-center btn-gradient text-white'>
										<FiUser className='text-[24px] font-bold max-md:text-sm mr-1' />{' '}
										Đăng nhập
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
