import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import User from '../../../../model/user'
import dbConnect from '../../../../config/dbConnect'
export default NextAuth({
	providers: [
		// Google providers
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// facebook providers
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),

		CredentialsProvider({
			async authorize(credentials, req) {
				dbConnect()
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
})
