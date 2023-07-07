import React from 'react'

const InputOtp = ({
	errors,
	disabledSend = false,
	loading = false,
	onSendOTP,
	countdown = 0,
	className = '',
	...props
}) => {
	return (
		<>
			<div className=' mt-4 relative '>
				<input
					id='email'
					type='text'
					placeholder='Email OTP'
					className='relative bg-whites border-gray-300  rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-[16px] placeholder:text-[#6d767e] w-full p-3	'
				/>
				<button className='py-3 px-6 bg-reds font-medium absolute top-[1px] right-0'>
					{countdown !== 60 && countdown !== 0 ? countdown : 'Gửi'}
				</button>
			</div>
		</>
	)
}

export default InputOtp
