import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import User from '../../../../models/user'
import Connect from '../../../../config/connect'

export default NextAuth({
	providers: [],
	providers: [
		//google
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		//facebook
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),

		//signIn
		CredentialsProvider({
			async authorize(credentials, req) {
				Connect()
				const { email, password } = credentials

				const user = await User.findOne({ email })

				if (!user) {
					throw new Error('email hoặc password không hợp lệ')
				}
				const isPasswordMatched = await bcrypt.compare(password, user.password)

				if (!isPasswordMatched) {
					throw new Error('email hoặc password không hợp lệ')
				}
				return user
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
})
