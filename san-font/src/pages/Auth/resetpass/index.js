import React from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import * as Yup from 'yup'
import { BiError } from 'react-icons/bi'
import { useFormik } from 'formik'

const ResetPass = () => {
	const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
		useFormik({
			initialValues: {
				email: '',
			},

			validationSchema: Yup.object({
				email: Yup.string()
					.email('email không đúng')
					.required('This field is equired!'),
			}),
			onSubmit: values => {
				console.log(values)
			},
		})
	return (
		<>
			<div className='w-full  flex mt-10'>
				<div className='w-[80%] mx-auto '>
					<Link className='flex font-normal text-base' href={'/'}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='mr-1 w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						Về trang chủ
					</Link>
				</div>
			</div>

			<form
				onSubmit={handleSubmit}
				className='w-[35%]  mx-auto bg-white rounded-xl shadow-xl mt-10'
			>
				<div className='w-[85%] mx-auto pt-8'>
					{' '}
					<h1 className='font-medium text-2xl'>Quên mật khẩu</h1>
					<div className=' mt-4 relative '>
						<input
							id='email'
							type='text'
							placeholder='Email'
							onChange={handleChange}
							value={values.email}
							onBlur={handleBlur}
							className={`relative bg-white border-gray-300  rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-[16px] placeholder:text-[#6d767e] w-full p-3				
							${
								errors.email
									? 'border border-red-600 ring-2 ring-red-100'
									: 'border border-gray-300 bg-white'
							}`}
						/>
						{errors.email && touched.email && (
							<p className='mt-1 gap-1 text-sm flex text-red-600'>
								<BiError className='mt-[3px]' /> <span>{errors.email}</span>
							</p>
						)}
					</div>
					<div className=' mx-auto'>
						<button
							type='submit'
							className='flex mt-5 w-[200px] mx-auto max-sm:mx-3 items-center max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center text-white'
						>
							<FiUser className='font-extrabold text-[20px] max-md:text-sm' />
							<a className='ml-2 max-md:text-[13px] text-base font-normal'>
								Lấy lại mật khẩu
							</a>
						</button>
					</div>
					<div className='text-center text-xl py-6'>
						<Link href={'/register'}>
							<span className='font-bold'>Đăng ký ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default ResetPass
