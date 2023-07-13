import axiosClient from './axiosClient'

const AuthApis = {
	login: ({ email, password }) =>
		axiosClient.post('/api/auth/sign-in', {
			email,
			password,
		}),

	signUpUser: ({ email, password, username }) =>
		axiosClient.post('/api/auth/sign-up', {
			username,
			email,
			password,
		}),
	sendOTP: payload => axiosClient.post('/api/auth/otp', payload),
	resetPassword: ({ email, otpCode, password, rePassword }) =>
		axiosClient.post('/api/auth/forgot-password', {
			email,
			otpCode,
			password,
			rePassword,
		}),
}

export default AuthApis
