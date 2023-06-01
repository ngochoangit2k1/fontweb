import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '../../../../config/dbConnect'
import bcrypt from 'bcryptjs'
import User from '../../../../model/user'

export default NextAuth({
	session: {
		strategy: 'jwt',
	},
	providers: [
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
	pages: {
		signIn: 'Auth/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
})
