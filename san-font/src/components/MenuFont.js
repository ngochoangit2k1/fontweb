import Link from 'next/link'
import { useRouter } from 'next/router'
const MenuFont = ({ test }) => {
	const router = useRouter()
	const currentRoute = router.pathname
	return (
		<>
			<li
				className={
					currentRoute === '/'
						? 'bg-white rounded-[30px] py-2 px-3 font-normal text-base'
						: 'bg-oranges rounded-[30px] py-2 px-3 font-normal text-base text-white'
				}
			>
				<Link href='/' legacyBehavior>
					<a>{test}</a>
				</Link>
			</li>
		</>
	)
}

export default MenuFont
