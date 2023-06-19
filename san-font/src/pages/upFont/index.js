import SelectFont from '@/components/SelectFonts/SelectFont'
import SelectImage from '@/components/SelectImages/SelectImage'
import Media from '@/components/SelectMedia/Media'
import TextEditor from '@/components/textEditor'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillCameraFill } from 'react-icons/bs'

const UpFont = () => {
	const { data } = useSession()

	return (
		<>
			{data?.user ? (
				<div className='mt-32 py-12 bg-whites w-[85%]  rounded-3xl mx-auto shadow-md max-xl:w-[90%]'>
					<div className='px-12'>
						<h2 className='text-blacks font-bold text-2xl'>ĐĂNG TẢI FONT</h2>
						<hr className='mt-4' />

						<div>
							{/* Tiêu đề */}
							<h3 className='font-bold text-blacks mt-10'>
								Tiêu đề <span className='text-reds'>*</span>
							</h3>
							<p className='text-sm text-[#888888]'>
								<span className='font-semibold '>Cách đặt tiêu đề:</span>
								Font việt hoá + Tên font
							</p>
							<p className='text-sm text-[#888888]'>
								<span className='font-semibold '>Ví dụ: </span>
								Font việt hóa Goatskin Brush
							</p>
							<input
								type='text'
								className='bg-whites mt-4  border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3'
							/>
							<hr className='mt-4' />

							{/* Nội dung */}
							<h3 className='text-blacks font-bold mt-3'>Nội dung</h3>
							{/* The button to open modal */}
							<label htmlFor='my-modal-3'>
								<div className='cursor-pointer mt-2 flex w-[105px] gap-1 py-2 px-2 bg-[#f6f7f7] hover:bg-gray-100 font-medium text-xs text-blues hover:text-blueHover border border-solid border-blues hover:border-blueHover rounded'>
									<BsFillCameraFill className='text-[14px]' />
									Thêm media
								</div>
							</label>
							<TextEditor />

							<input type='checkbox' id='my-modal-3' className='modal-toggle' />
							<div className='modal '>
								<div className='modal-box rounded-none max-w-[95%] h-[90%] relative'>
									<label
										htmlFor='my-modal-3'
										className=' btn-sm font-blacks text-lg hover:text-blueHover text-blacks absolute right-2 top-2'
									>
										✕
									</label>

									<Media />
								</div>
							</div>

							<hr className='mt-14' />

							{/* Ảnh đại diện */}
							<h3 className='text-blacks font-bold mt-5 max-md:mt-32 max-sm:mt-20'>
								Ảnh đại diện <span className='text-reds'>*</span>
							</h3>

							<div className='flex mt-3'>
								<p className=' text-[15px] font-medium text-blacks max-lg:text-xs'>
									Chưa có ảnh nào được chọn.
								</p>
								<label htmlFor='my-modal'>
									<div className='font-medium text-[15px] text-blues cursor-pointer hover:text-blueHover max-lg:text-xs'>
										Thêm ảnh
									</div>
								</label>

								<input type='checkbox' id='my-modal' className='modal-toggle' />
								<div className='modal'>
									<div className='modal-box rounded-none max-w-[95%] h-[90%] relative'>
										<label
											htmlFor='my-modal'
											className=' btn-sm font-blacks text-lg hover:text-blueHover text-blacks absolute right-2 top-2'
										>
											✕
										</label>
										<SelectImage />
									</div>
								</div>
							</div>
							<hr className='mt-4' />

							{/* Danh mục */}
							<h3 className='text-blacks font-bold mt-3 '>
								Danh mục <span className='text-reds'>*</span>
							</h3>
							<div className='w-[100%]  mt-2 border border-solid border-gray-300 rounded'>
								<div className='box-check-lick w-full  '>
									<ul className='w-full pl-3 '>
										<li className='w-full'>
											<input
												id='vue-checkbox'
												type='checkbox'
												value=''
												className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
											/>
											<span
												htmlFor='vue-checkbox'
												className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
											>
												Font tiếng việtz
											</span>
										</li>
										<li className='w-full'>
											<input
												id='vue-checkbox'
												type='checkbox'
												value=''
												className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
											/>
											<span
												htmlFor='vue-checkbox'
												className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
											>
												Font việt hóa
											</span>

											<ul className='ml-4'>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font 1FTV
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														UTM font
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font MJ
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font trang trí
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font viết tay
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font có chân
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font không chân
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font ẩm thực
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font mỹ phẩm - Spa
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font ICIEL
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font MTD
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font SVN
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font Việt Linh
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font LNTH
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font FS
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font KS
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font Google
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font Vintage
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font thư pháp
													</span>
												</li>
												<li className='w-full'>
													<input
														id='vue-checkbox'
														type='checkbox'
														value=''
														className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
													/>
													<span
														htmlFor='vue-checkbox'
														className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
													>
														Font việt hóa khác
													</span>
												</li>
											</ul>
										</li>

										<li className='w-full'>
											<input
												id='vue-checkbox'
												type='checkbox'
												value=''
												className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
											/>
											<span
												htmlFor='vue-checkbox'
												className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
											>
												Font quảng cáo
											</span>
										</li>
										<li className='w-full'>
											<input
												id='vue-checkbox'
												type='checkbox'
												value=''
												className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
											/>
											<span
												htmlFor='vue-checkbox'
												className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
											>
												Font chọn lọc
											</span>
										</li>
										<li className='w-full'>
											<input
												id='vue-checkbox'
												type='checkbox'
												value=''
												className='w-3 h-3 text-blues bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
											/>
											<span
												htmlFor='vue-checkbox'
												className='w-full pt-2 ml-2 text-sm font-medium text-blacks'
											>
												VIP
											</span>
										</li>
									</ul>
								</div>
							</div>
							<hr className='mt-4' />

							{/* Tác giả */}
							<h3 className='font-bold text-blacks mt-4'>Tác giả</h3>
							<input
								type='text'
								className='bg-whites mt-3 border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3'
							/>

							<hr className='mt-4' />

							<h3 className='font-bold text-blacks mt-4'>
								Việt hóa bởi <span className='text-reds'>*</span>
							</h3>
							<p className='text-sm mt-3 text-[#888888]'>
								Hãy cố gắng ghi thông tin người việt hóa hoặc team việt hóa để
								tôn trọng họ nha
							</p>

							<input
								type='text'
								className='bg-whites mt-2  border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3'
							/>
							<hr className='mt-4' />

							{/* Font tải lên */}
							<h3 className='font-bold text-blacks mt-4'>
								Font tải lên <span className='text-reds'>*</span>
							</h3>
							<p className='text-sm mt-2 text-[#888888]'>
								Có thể tải lên định dạng .ttf, .otf hoặc .zip (Nếu nhiều font
								nên nén zip lại)
							</p>

							<div className='flex mt-3'>
								<p className=' text-[15px] font-normal text-blacks max-lg:text-xs'>
									Chưa có font nào được chọn.
								</p>
								<label htmlFor='my-modal-2'>
									<p className='cursor-pointer font-medium text-[15px] text-[#0d6efd] hover:text-blueHover max-lg:text-xs'>
										Thêm font
									</p>
								</label>

								{/* Put this part before </body> tag */}
								<input
									type='checkbox'
									id='my-modal-2'
									className='modal-toggle'
								/>
								<div className='modal'>
									<div className='modal-box rounded-none max-w-[95%] h-[90%] relative'>
										<label
											htmlFor='my-modal-2'
											className=' btn-sm font-blacks text-lg hover:text-blueHover text-blacks absolute right-2 top-2'
										>
											✕
										</label>
										<SelectFont />
									</div>
								</div>
							</div>
							<button className='flex mt-4 max-sm:mx-3 items-center w-[120px] max-sm:w-28 max-sm:h-8 h-11 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-whites'>
								<a className=' max-md:text-[13px] text-base font-normal'>
									Đăng bài
								</a>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className='mt-32 py-12 bg-[#ffff] w-[85%]  rounded-3xl mx-auto shadow-md max-xl:w-[90%]'>
					<div className='px-12'>
						<h2 className='text-blacks font-bold text-2xl'>ĐĂNG TẢI FONT</h2>
						<hr className='mt-4' />

						<p className='mt-6 font-medium text-blacks'>
							Vui lòng{' '}
							<Link href={'/Auth/login'}>
								{' '}
								<a className='text-[#2270b0]'>đăng nhập</a>
							</Link>{' '}
							để đăng tải font.
						</p>
					</div>
				</div>
			)}
		</>
	)
}
export default UpFont
