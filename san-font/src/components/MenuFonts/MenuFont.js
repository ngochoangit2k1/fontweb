import NameFont from './NameFont'

const MenuFont = ({ Data, setHomeData }) => {
	const funcFilter = nameFont => {
		const nameFonts = Data.filter(item => item.nameFont === nameFont)
		setHomeData(nameFonts)
	}
	return (
		<>
			<div className='w-[65%] mx-auto mt-10 max-lg:w-[90%]'>
				<ul className=' flex flex-wrap w-full gap-5 justify-center max-2xl:w-[100%]'>
					<NameFont onClick={() => setHomeData(Data)} test={'All font'} />
					<NameFont
						onClick={() => funcFilter('Font 1FTV')}
						test={'Font 1FTV'}
					/>
					<NameFont onClick={() => funcFilter('UTM font')} test={'UTM font'} />
					<NameFont onClick={() => funcFilter('Font MJ')} test={'Font MJ'} />
					<NameFont
						onClick={() => funcFilter('Font trang trí')}
						test={'Font trang trí'}
					/>
					<NameFont
						onClick={() => funcFilter('Font viết tay')}
						test={'Font viết tay'}
					/>
					<NameFont
						onClick={() => funcFilter('Font có chân')}
						test={'Font có chân'}
					/>
					<NameFont
						onClick={() => funcFilter('Font bất động sản')}
						test={'Font bất động sản'}
					/>
					<NameFont
						onClick={() => funcFilter('Font không chân')}
						test={'Font không chân'}
					/>
					<NameFont
						onClick={() => funcFilter('Font ẩm thực')}
						test={'Font ẩm thực'}
					/>
					<NameFont
						onClick={() => funcFilter('Font mỹ phẩm - Spa')}
						test={'Font mỹ phẩm - Spa'}
					/>
					<NameFont
						onClick={() => funcFilter('Font ICIE')}
						test={'Font ICIEL'}
					/>
					<NameFont onClick={() => funcFilter('Font MTD')} test={'Font MTD'} />
					<NameFont onClick={() => funcFilter('Font SVN')} test={'Font SVN'} />
					<NameFont
						onClick={() => funcFilter('Font Việt Linh')}
						test={'Font Việt Linh'}
					/>
					<NameFont
						onClick={() => funcFilter('Font LNTH')}
						test={'Font LNTH'}
					/>
					<NameFont onClick={() => funcFilter('Font FS')} test={'Font FS'} />
					<NameFont onClick={() => funcFilter('Font KS')} test={'Font KS'} />
					<NameFont
						onClick={() => funcFilter('Font Google')}
						test={'Font Google'}
					/>
					<NameFont
						onClick={() => funcFilter('Font Vintage')}
						test={'Font Vintage'}
					/>
					<NameFont
						onClick={() => funcFilter('Font thư pháp')}
						test={'Font thư pháp'}
					/>
					<NameFont
						onClick={() => funcFilter('Font việt hóa khác')}
						test={'Font việt hóa khác'}
					/>
					<NameFont
						onClick={() => funcFilter('Font việt hoá')}
						test={'Font việt hoá'}
					/>
					<NameFont
						onClick={() => funcFilter('Font quảng cáo')}
						test={'Font quảng cáo'}
					/>
					<NameFont
						onClick={() => funcFilter('Font chọn lọc')}
						test={'Font chọn lọc'}
					/>
					<NameFont
						onClick={() => funcFilter('VIP')}
						className='bg-[#34a853]'
						test={'VIP'}
					/>
				</ul>
			</div>
		</>
	)
}

export default MenuFont
