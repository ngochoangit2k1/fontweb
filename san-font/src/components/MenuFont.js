const MenuFont = ({ test, onClick }) => {
	return (
		<>
			<li
				onClick={onClick}
				className={'bg-white   rounded-[30px]   font-medium text-base'}
			>
				<button className='py-3 px-4 cursor-pointer bg-white rounded-[30px]  focus:bg-oranges focus:text-white text-black'>
					{test}
				</button>
			</li>
		</>
	)
}

export default MenuFont
