import SelectFont from '@/components/SelectFonts/SelectFont'
import SelectImage from '@/components/SelectImages/SelectImage'
import Media from '@/components/SelectMedia/Media'
import TextEditor from '@/components/textEditor'
import { BsFillCameraFill } from 'react-icons/bs'

const UpFont = () => {
	return (
		<>
			<div className='mt-14 py-12 bg-[#ffff] w-[85%]  rounded-3xl mx-auto shadow-md'>
				<div className='px-12'>
					<h2 className='text-black font-bold text-2xl'>ĐĂNG TẢI FONT</h2>
					<hr className='mt-4' />

					{/* Tiêu đề */}
					<h3 className='font-bold text-black mt-10'>
						Tiêu đề <span className='text-[#ff0808]'>*</span>
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
						className='bg-white mt-4  border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3'
					/>
					<hr className='mt-4' />

					{/* Nội dung */}
					<h3 className='text-black font-bold mt-3'>Nội dung</h3>
					{/* The button to open modal */}
					<label htmlFor='my-modal-3'>
						<div className='cursor-pointer mt-2 flex w-[105px] gap-1 py-2 px-2 bg-[#f6f7f7] hover:bg-gray-100 font-medium text-xs text-[#2270b0] hover:text-[#014d8b] border border-solid border-[#2270b0] hover:border-[#014d8b] rounded'>
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
								className=' btn-sm font-black text-lg hover:text-[#014d8b] text-black absolute right-2 top-2'
							>
								✕
							</label>

							<Media />
						</div>
					</div>

					<hr className='mt-14' />

					{/* Ảnh đại diện */}
					<h3 className='text-black font-bold mt-5 '>
						Ảnh đại diện <span className='text-[#ff0808]'>*</span>
					</h3>

					<div className='flex mt-3'>
						<p className=' text-[15px] font-medium text-black'>
							Chưa có ảnh nào được chọn.
						</p>
						<label htmlFor='my-modal'>
							<div className='font-medium text-[15px] text-[#0d6efd] cursor-pointer hover:text-[#014d8b]'>
								Thêm ảnh
							</div>
						</label>

						<input type='checkbox' id='my-modal' className='modal-toggle' />
						<div className='modal'>
							<div className='modal-box rounded-none max-w-[95%] h-[90%] relative'>
								<label
									htmlFor='my-modal'
									className=' btn-sm font-black text-lg hover:text-[#014d8b] text-black absolute right-2 top-2'
								>
									✕
								</label>
								<SelectImage />
							</div>
						</div>
					</div>
					<hr className='mt-4' />

					{/* Danh mục */}
					<h3 className='text-black font-bold mt-3 '>
						Danh mục <span className='text-[#ff0808]'>*</span>
					</h3>
					<div className='w-[100%]  mt-2 border border-solid border-gray-300 rounded'>
						<div className='box-check-lick w-full leading-4'>
							<ul className='w-full '>
								<li className='w-full'>
									<label className='flex items-center pl-3'>
										<input
											id='vue-checkbox'
											type='checkbox'
											value=''
											className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
										/>
										<span
											for='vue-checkbox'
											className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
										>
											Font tiếng việt
										</span>
									</label>
								</li>
								<li className='w-full'>
									<label className='flex items-center pl-3'>
										<input
											id='vue-checkbox'
											type='checkbox'
											value=''
											className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
										/>
										<span
											for='vue-checkbox'
											className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
										>
											Font việt hóa
										</span>
									</label>

									<ul className='ml-4'>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font 1FTV
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													UTM font
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font MJ
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font trang trí
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font viết tay
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font có chân
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font không chân
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font ẩm thực
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font mỹ phẩm - Spa
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font ICIEL
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font MTD
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font SVN
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font Việt Linh
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font LNTH
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font FS
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font KS
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font Google
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font Vintage
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font thư pháp
												</span>
											</label>
										</li>
										<li className='w-full'>
											<label className='flex items-center pl-3'>
												<input
													id='vue-checkbox'
													type='checkbox'
													value=''
													className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
												/>
												<span
													for='vue-checkbox'
													className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
												>
													Font việt hóa khác
												</span>
											</label>
										</li>
									</ul>
								</li>

								<li className='w-full'>
									<label className='flex items-center pl-3'>
										<input
											id='vue-checkbox'
											type='checkbox'
											value=''
											className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
										/>
										<span
											for='vue-checkbox'
											className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
										>
											Font quảng cáo
										</span>
									</label>
								</li>
								<li className='w-full'>
									<label className='flex items-center pl-3'>
										<input
											id='vue-checkbox'
											type='checkbox'
											value=''
											className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
										/>
										<span
											for='vue-checkbox'
											className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
										>
											Font chọn lọc
										</span>
									</label>
								</li>
								<li className='w-full'>
									<label className='flex items-center pl-3'>
										<input
											id='vue-checkbox'
											type='checkbox'
											value=''
											className='w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 shadow-inner rounded focus:ring-blue-500'
										/>
										<span
											for='vue-checkbox'
											className='w-full pt-2 ml-2 text-[13px] font-medium text-black'
										>
											VIP
										</span>
									</label>
								</li>
							</ul>
						</div>
					</div>
					<hr className='mt-4' />

					{/* Tác giả */}
					<h3 className='font-bold text-black mt-4'>Tác giả</h3>
					<input
						type='text'
						className='bg-white mt-3 border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3'
					/>

					<hr className='mt-4' />

					<h3 className='font-bold text-black mt-4'>
						Việt hóa bởi <span className='text-[#ff0808]'>*</span>
					</h3>
					<p className='text-sm mt-3 text-[#888888]'>
						Hãy cố gắng ghi thông tin người việt hóa hoặc team việt hóa để tôn
						trọng họ nha
					</p>

					<input
						type='text'
						className='bg-white mt-2  border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3'
					/>
					<hr className='mt-4' />

					{/* Font tải lên */}
					<h3 className='font-bold text-black mt-4'>
						Font tải lên <span className='text-[#ff0808]'>*</span>
					</h3>
					<p className='text-sm mt-2 text-[#888888]'>
						Có thể tải lên định dạng .ttf, .otf hoặc .zip (Nếu nhiều font nên
						nén zip lại)
					</p>

					<div className='flex mt-3'>
						<p className=' text-[15px] font-normal text-black'>
							Chưa có font nào được chọn.
						</p>
						<label htmlFor='my-modal-2'>
							<div className='cursor-pointer font-medium text-[15px] text-[#0d6efd] hover:text-[#014d8b]'>
								Thêm font
							</div>
						</label>

						{/* Put this part before </body> tag */}
						<input type='checkbox' id='my-modal-2' className='modal-toggle' />
						<div className='modal'>
							<div className='modal-box rounded-none max-w-[95%] h-[90%] relative'>
								<label
									htmlFor='my-modal-2'
									className=' btn-sm font-black text-lg hover:text-[#014d8b] text-black absolute right-2 top-2'
								>
									✕
								</label>
								<SelectFont />
							</div>
						</div>
					</div>
					<button className='flex mt-4 max-sm:mx-3 items-center w-[120px] max-sm:w-28 max-sm:h-8 h-11 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-white'>
						<a className=' max-md:text-[13px] text-base font-normal'>
							Đăng bài
						</a>
					</button>
				</div>
			</div>
		</>
	)
}
export default UpFont
