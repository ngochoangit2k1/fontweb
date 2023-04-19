import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuFont = ({ test, onClick }) => {
	return (
		<>
			<li
				onClick={onClick}
				className={
					'bg-white cursor-pointer rounded-[30px] py-3 px-4 font-medium text-base focus:bg-oranges focus:text-white'
				}
			>
				<a className='text-black'>{test}</a>
			</li>
		</>
	)
}

export default MenuFont
