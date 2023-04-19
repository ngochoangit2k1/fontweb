import { SiMessenger } from 'react-icons/si'

const Messenger = () => {
	return (
		<>
			<div className='messenger fixed top-[85%] right-5 w-14 h-14 bg-[#0A7CFF] rounded-[50%] text-center '>
				<div className='w-10 h-10 mx-auto pt-4'>
					<SiMessenger className='w-full h-full bg-transparent text-white ' />
				</div>
			</div>
		</>
	)
}

export default Messenger
