import imgGlobal from '@/data/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { FaSignOutAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/accountSlice'

const Header = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [pathName, setPathName] = useState('')
	const [toggleMenu, setToggleMenu] = useState(true)
	const { token, info } = useSelector(state => state.account)

	useEffect(() => {
		setPathName(router.pathname)
	}, [router.pathname])

	const signOut = () => {
		dispatch(logout())
		router.push('/')
	}
	return (
		<header>
			<nav className='bg-whites shadow-lg  py-6 fixed top-0 left-0 right-0 z-[99]'>
				<div className='w-[85%] flex flex-wrap justify-between items-center mx-auto max-xl:w-[90%]'>
					<Link href={'/'} className='max-lg:ml-3'>
						<Image
							src={imgGlobal.Logo}
							className='max-md:w-32 w-40'
							alt='logo'
						></Image>
					</Link>

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
						<ul className='flex flex-col font-bold  xl:flex-row max-xl:text-center xl:space-x-8 xl:mt-0'>
							<li
								className={`max-xl:py-2  hover:text-oranges hover:duration-300 max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/' ? 'lg:relative' : ' '
								}`}
							>
								<Link href={'/'}>Home</Link>
								{pathName === '/' ? (
									<div
										className={`xl:absolute top-[30px] xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
							</li>

							<li
								className={`test-demo dropdown dropdown-hover max-xl:py-2 hover:text-oranges hover:duration-300 max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/font-viet-hoa' ? 'xl:relative' : ''
								}`}
							>
								<Link tabIndex={0} href={'/font-viet-hoa'}>
									Font việt hóa
								</Link>
								{pathName === '/font-viet-hoa' ? (
									<div
										className={`xl:absolute top-[30px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}

								<ul
									tabIndex={0}
									className='dropdown-content mt-[35px] py-2 text-blacks  menu font-medium leading-4 shadow-xl bg-base-100 w-52'
								>
									<li>
										<Link href={'/font-viet-hoa/font-1FTV'} legacyBehavior>
											<a>Font 1FTV</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-trang-tri'} legacyBehavior>
											<a>Font trang trí</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-viet-tay'} legacyBehavior>
											<a>Font viết tay</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-co-chan'} legacyBehavior>
											<a>Font có chân</a>
										</Link>
									</li>
									<li>
										<Link
											href={'/font-viet-hoa/font-khong-chan'}
											legacyBehavior
										>
											<a>Font không chân</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-ICIEL'} legacyBehavior>
											<a>Font ICIEL</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-MTD'} legacyBehavior>
											<a>Font MTD</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-SVN'} legacyBehavior>
											<a>Font SVN</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-viet-linh'} legacyBehavior>
											<a>Font Việt Linh</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-LNTH'} legacyBehavior>
											<a>Font LNTH</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-FS'} legacyBehavior>
											<a>Font FS</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/font-vintage'} legacyBehavior>
											<a>Font vintage</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/UTM-font'} legacyBehavior>
											<a>Font thư pháp</a>
										</Link>
									</li>
									<li>
										<Link href={'/font-viet-hoa/UTM-font'} legacyBehavior>
											<a>UTM Font </a>
										</Link>
									</li>
								</ul>
							</li>

							<li
								className={`test-demo dropdown dropdown-hover max-xl:py-2 hover:text-oranges hover:duration-300 max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/font-quang-cao' ? 'xl:relative' : ''
								}`}
							>
								<Link tabIndex={0} href={'/font-quang-cao'}>
									Font quảng cáo
								</Link>
								{pathName === '/font-quang-cao' ? (
									<div
										className={`xl:absolute top-[30px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
								<ul
									tabIndex={0}
									className=' dropdown-content mt-[35px] py-2 text-blacks menu font-medium leading-3 shadow-xl bg-base-100 w-52'
								>
									<li>
										<Link
											href={'/font-quang-cao/font-bat-dong-san'}
											legacyBehavior
										>
											<a>UTM bất động sản </a>
										</Link>
									</li>
									<li>
										<Link href={'/font-quang-cao/font-am-thuc'} legacyBehavior>
											<a>UTM ẩm thực </a>
										</Link>
									</li>
									<li>
										<Link href={'/font-quang-cao/font-my-pham'} legacyBehavior>
											<a>Font mỹ phẩm - Spa </a>
										</Link>
									</li>
								</ul>
							</li>
							<li
								className={`max-xl:py-2 hover:text-oranges hover:duration-300 max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/goi-vip' ? 'xl:relative' : ''
								}`}
							>
								<Link href={'/goi-vip'}>Gói VIP</Link>
								{pathName === '/goi-vip' ? (
									<div
										className={`xl:absolute top-[30px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
							</li>
							<li
								className={`max-xl:py-2 hover:text-oranges hover:duration-300 max-xl:hover:font-semibold max-xl:bg-[#eee] max-xl:hover:bg-slate-200 max-xl:pl-4 cursor-pointer ${
									pathName === '/blog' ? 'xl:relative' : ''
								}`}
							>
								<Link href={'/blog'}>Blog</Link>
								{pathName === '/blog' ? (
									<div
										className={`xl:absolute top-[30px] left-0 xl:h-[3px] bg-oranges xl:w-[calc(100%)]`}
									></div>
								) : (
									''
								)}
							</li>
						</ul>

						<div className='flex ml-10 items-center gap-3 xl:order-2 max-lg:justify-center max-lg:mx-auto max-lg:mt-5'>
							<Link href={'/upFont'}>
								<button className='flex items-center py-2.5 bg-oranges rounded justify-center btn-gradient text-whites px-2 max-sm:mx-3 max-sm:w-28 max-sm:h-8'>
									<AiOutlineCloudUpload className='font-extrabold text-[24px] max-md:text-sm' />
									<span className='ml-2 text-[15px]  max-md:text-[13px]'>
										Up font
									</span>
								</button>
							</Link>

							{token ? (
								<div className='flex gap-2'>
									<Link href={'/profiles'}>
										<button className='flex items-center py-2.5 bg-[#1876f2] rounded  justify-center btn-gradient text-whites px-2  max-sm:mx-3 max-sm:w-28 max-sm:h-8'>
											<FiUser className='text-[24px] font-bold mr-1 max-md:text-sm' />
											<span className='ml-1 text-[15px]  max-md:text-[13px]'>
												{info && info.username}
											</span>
										</button>
									</Link>

									<Link href={''}>
										<button
											onClick={() => signOut()}
											className='flex ml-1  max-sm:mx-3 items-center px-2 py-2.5 max-sm:w-28 max-sm:h-8  bg-[#ff8d08] rounded  justify-center btn-gradient text-whites'
										>
											<FaSignOutAlt className='text-[24px] font-bold max-md:text-sm mr-1' />{' '}
											Đăng xuất
										</button>
									</Link>
								</div>
							) : (
								<Link href={'/Auth/login'}>
									<button className='flex ml-1 max-sm:mx-3 items-center px-2 py-2.5 max-sm:w-28 max-sm:h-8  bg-[#ff8d08] rounded  justify-center btn-gradient text-whites'>
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
