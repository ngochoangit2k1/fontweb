import Link from 'next/link'
import { SiMessenger } from 'react-icons/si'

const Messenger = () => {
	return (
		<Link href={'https://www.facebook.com/'}>
			<div className='messenger fixed top-[85%] right-5 w-14 h-14 bg-[#0A7CFF] rounded-[50%] text-center '>
				<div className='w-10 h-10 mx-auto pt-4'>
					<SiMessenger className='w-full h-full bg-transparent text-whites ' />
				</div>
			</div>
		</Link>
	)
}

export default Messenger
