import NameFont from './NameFont'

const MenuFont = ({ Data, setHomeData }) => {
	const funcFilter = nameFont => {
		const nameFonts = Data.filter(item => item.nameFont === nameFont)
		setHomeData(nameFonts)
	}

	const filterSeLec = () => {
		const fontSeLective = Data.filter(item => item.selective)
		setHomeData(fontSeLective)
	}

	const filterVip = () => {
		const fontVips = Data.filter(item => item.special)
		setHomeData(fontVips)
	}

	const filterQC = () => {
		const fontQCs = Data.filter(item => item.category === 'FontQC')
		setHomeData(fontQCs)
	}

	const filterVH = () => {
		const fontVHs = Data.filter(item => item.category === 'FontVH')
		setHomeData(fontVHs)
	}
	return (
		<>
			<div className='w-[65%] mx-auto mt-10 max-xl:w-[90%]'>
				<ul className=' flex flex-wrap w-full gap-5 justify-center max-2xl:w-[100%]'>
					<NameFont onClick={() => setHomeData(Data)} test={'All font'} />
					<NameFont
						onClick={() => funcFilter('font-1FTV')}
						test={'Font 1FTV'}
					/>
					<NameFont onClick={() => funcFilter('UTM-font')} test={'UTM Font'} />
					<NameFont onClick={() => funcFilter('font-MJ')} test={'Font MJ'} />
					<NameFont
						onClick={() => funcFilter('font-trang-tri')}
						test={'Font trang trí'}
					/>
					<NameFont
						onClick={() => funcFilter('font-viet-tay')}
						test={'Font viết tay'}
					/>
					<NameFont
						onClick={() => funcFilter('font-co-chan')}
						test={'Font có chân'}
					/>
					<NameFont
						onClick={() => funcFilter('font-bat-dong-san')}
						test={'Font bất động sản'}
					/>
					<NameFont
						onClick={() => funcFilter('font-khong-chan')}
						test={'Font không chân'}
					/>
					<NameFont
						onClick={() => funcFilter('font-am-thuc')}
						test={'Font ẩm thực'}
					/>
					<NameFont
						onClick={() => funcFilter('font-my-pham')}
						test={'Font mỹ phẩm - Spa'}
					/>
					<NameFont
						onClick={() => funcFilter('font-ICIEL')}
						test={'Font ICIEL'}
					/>
					<NameFont onClick={() => funcFilter('font-MTD')} test={'Font MTD'} />
					<NameFont onClick={() => funcFilter('font-SVN')} test={'Font SVN'} />
					<NameFont
						onClick={() => funcFilter('font-viet-linh')}
						test={'Font Việt Linh'}
					/>
					<NameFont
						onClick={() => funcFilter('font-LNTH')}
						test={'Font LNTH'}
					/>
					<NameFont onClick={() => funcFilter('font-FS')} test={'Font FS'} />
					<NameFont onClick={() => funcFilter('font-KS')} test={'Font KS'} />
					<NameFont
						onClick={() => funcFilter('font-google')}
						test={'Font Google'}
					/>
					<NameFont
						onClick={() => funcFilter('font-vintage')}
						test={'Font Vintage'}
					/>
					<NameFont
						onClick={() => funcFilter('font-thu-phap')}
						test={'Font thư pháp'}
					/>
					<NameFont
						onClick={() => funcFilter('Font việt hóa khác')}
						test={'Font việt hóa khác'}
					/>
					<NameFont onClick={() => filterVH('FontVH')} test={'Font việt hoá'} />
					<NameFont
						onClick={() => filterQC('FontQC')}
						test={'Font quảng cáo'}
					/>
					<NameFont
						onClick={() => filterSeLec('chon-loc')}
						test={'Font chọn lọc'}
					/>
					<NameFont
						onClick={() => filterVip('vip')}
						className='bg-[#34a853]'
						test={'VIP'}
					/>
				</ul>
			</div>
		</>
	)
}

export default MenuFont
