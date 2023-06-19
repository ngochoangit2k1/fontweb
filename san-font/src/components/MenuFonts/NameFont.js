const NameFont = ({ test, onClick }) => {
	return (
		<>
			<li
				onClick={onClick}
				className={'bg-whites rounded-[30px] font-medium text-base'}
			>
				<button className='py-3 px-4 cursor-pointer bg-whites rounded-[30px]  focus:bg-oranges focus:text-whites text-blacks'>
					{test}
				</button>
			</li>
		</>
	)
}

export default NameFont
