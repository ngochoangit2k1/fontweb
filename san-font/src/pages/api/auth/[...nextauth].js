import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongo from '../../../../database/conn'
import Users from '../../../../model/Schema'
import { compare } from 'bcryptjs'

export default NextAuth({
	session: {
		strategy: 'jwt',
	},
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
				connectMongo()
				const { email, password } = credentials

				const user = await Users.findOne({ email })

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
