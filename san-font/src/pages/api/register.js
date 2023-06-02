import User from '../../../model/user'
import dbConnect from '../../../config/dbConnect'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		dbConnect()

		const { name, email, password, confirmPassword } = req.body

		//check email đã đăng ký
		const duplicateEmail = await User.findOne({ email })
		if (duplicateEmail)
			return res.status(401).json({ messge: 'email đã được sử dụng!' })

		const body = { name, email, password, confirmPassword }

		const user = await User.create(body)

		res.status(201).json({ user })
	}
}
