import React, { forwardRef } from 'react'

export const formatNumber = value => String(value).replace(/[^0-9]/g, '')

const InputOtp = (
	{
		errors,
		disabledSend = false,
		loading = false,
		onSendOTP,
		countdown = 0,
		className = '',
		...props
	},
	ref
) => {
	return (
		<>
			<div className=' mt-4 relative '>
				<input
					{...props}
					value={props.value}
					onChange={e => props.onChange(formatNumber(e.target.value))}
					ref={ref}
					placeholder='Email OTP'
					className='relative bg-whites border-gray-300  rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-[16px] placeholder:text-[#6d767e] w-full p-3	'
				/>
				<button
					loading={loading}
					disabled={disabledSend || countdown < 60}
					onClick={onSendOTP}
					className='py-3 px-6 bg-reds font-medium absolute top-[1px] right-0'
				>
					{countdown !== 60 && countdown !== 0 ? countdown : 'Gửi'}
				</button>
			</div>
		</>
	)
}

export default forwardRef(InputOtp)
