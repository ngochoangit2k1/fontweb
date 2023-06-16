import React from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import * as Yup from 'yup'
import { BiError, BiLeftArrowCircle } from 'react-icons/bi'
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
			<div className='w-full  flex mt-28'>
				<div className='w-[80%] mx-auto '>
					<Link className='gap-1 flex font-normal text-base' href={'/'}>
						<BiLeftArrowCircle className='text-xl mt-[3px]' />
						Về trang chủ
					</Link>
				</div>
			</div>

			<form
				onSubmit={handleSubmit}
				className='w-[35%]  mx-auto bg-white rounded-xl shadow-xl mt-10  max-xl:w-[90%]'
			>
				<div className='w-[85%] mx-auto pt-8'>
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
					<div className='w-full'>
						<button
							type='submit'
							className='flex mx-auto mt-5 px-5  h-10 bg-oranges items-center justify-center text-white hover:bg-opacity-80 rounded-[30px]  '
						>
							<FiUser className='font-extrabold text-[20px] ' />
							<a className='ml-2 text-base font-normal'>Lấy lại mật khẩu</a>
						</button>
					</div>
					<div className='text-center text-xl py-6'>
						<Link href={'/Auth/register'}>
							<span className='font-bold'>Đăng ký ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default ResetPass
