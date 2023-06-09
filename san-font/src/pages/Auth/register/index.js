import React, { useState } from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios'
import { BiLeftArrowCircle } from 'react-icons/bi'
import { useRouter } from 'next/router'

const Register = () => {
	const router = useRouter()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = async e => {
		e.preventDefault()

		try {
			const { data } = await axios.post('/api/register', {
				name,
				email,
				password,
			})
			console.log(data)
			if (data.user.email) {
				router.push('/Auth/login')
			}
		} catch (error) {
			console.log(error)
		}
	}
	//eye password
	const [eyeOne, setEyeOne] = useState(false)
	const toggle = () => {
		setEyeOne(!eyeOne)
	}

	//eye confirmPassword
	const [eye, setEye] = useState(false)
	const toggleOne = () => {
		setEye(!eye)
	}
	return (
		<>
			<div className='w-full  flex mt-10'>
				<div className='w-[80%] mx-auto '>
					<Link className='gap-1 flex font-normal text-base' href={'/'}>
						<BiLeftArrowCircle className='text-xl mt-[3px]' />
						Về trang chủ
					</Link>
				</div>
			</div>

			<form
				onSubmit={submitHandler}
				className='w-[35%]  mx-auto bg-white rounded-xl shadow-xl mt-10'
			>
				<div className='w-[85%] mx-auto pt-8'>
					{' '}
					<h1 className='font-medium text-2xl'>Đăng ký</h1>
					<hr className='mt-4  border-[#cccccc]' />
					<div className='mt-5  '>
						<input
							type='text'
							id='name'
							placeholder='Họ tên'
							className='bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3'
							required
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='mt-4'>
						<input
							type='Email'
							id='email'
							placeholder='Email'
							className='bg-white  border-gray-300 text-gray-900 text-sm rounded border focus:outline-none hover:border-oranges focus:border-oranges placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e]  block w-full p-3'
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<p className='mt-4 font-normal text-xs text-[#8d9399]'>
						* Không sử dụng email Yahoo, email trường CĐ, ĐH khi đăng ký
					</p>
					<div className=' mt-4 relative '>
						<div>
							<input
								type={eyeOne === false ? 'password' : 'text'}
								placeholder='Mật khẩu'
								id='password'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-3 right-2'>
							{eyeOne === false ? (
								<AiOutlineEye onClick={toggle} />
							) : (
								<AiOutlineEyeInvisible onClick={toggle} />
							)}
						</div>
					</div>
					<div className=' mt-4 relative '>
						<div>
							<input
								type={eye === false ? 'password' : 'text'}
								id='confirmPassword'
								placeholder='Nhập lại mật khẩu'
								className='test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'
								required

								// className={`${'test relative bg-white  border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e]  block w-full p-3'}
								// ${
								// 	formik.errors.confirmPassword &&
								// 	formik.touched.confirmPassword
								// 		? 'border-red-600 ring-2 ring-red-200'
								// 		: ''
								// }`}
								// {...formik.getFieldProps('confirmPassword')}
							/>
							{/* {formik.errors.confirmPassword &&
							formik.touched.confirmPassword ? (
								<span className='flex gap-1 font-normal text-sm text-red-600 '>
									{' '}
									<BiError className='mt-[3px]' />{' '}
									{formik.errors.confirmPassword}
								</span>
							) : (
								<></>
							)} */}
						</div>
						<div className='text-2xl cursor-pointer text-[#6a6870] absolute top-3 right-2'>
							{eye === false ? (
								<AiOutlineEye onClick={toggleOne} />
							) : (
								<AiOutlineEyeInvisible onClick={toggleOne} />
							)}
						</div>
					</div>
					<div className='w-[30%] mx-auto'>
						{' '}
						<button
							type='submit'
							className='flex mt-5   max-sm:mx-3 items-center w-[140px] max-sm:w-28 max-sm:h-8 h-10 bg-oranges hover:bg-opacity-80 rounded-[30px]  justify-center btn-gradient text-white'
						>
							<FiUser className='font-extrabold text-[20px] max-md:text-sm' />
							<a className='ml-2 max-md:text-[13px] text-base font-normal'>
								Đăng ký
							</a>
						</button>
					</div>
					<div className='text-center text-xl py-8'>
						Bạn đã có tài khoản ?{' '}
						<Link href={'/Auth/login'}>
							<span className='font-bold'>Đăng nhập ngay</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default Register
