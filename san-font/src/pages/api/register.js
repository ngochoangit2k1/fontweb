import User from '../../../models/user'
import Connect from '../../../config/connect'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		Connect()

		const { name, email, password } = req.body

		const duplicateEmail = await User.findOne({ email })
		if (duplicateEmail)
			return res.status(401).json({ message: 'email đã được sử dụng!' })

		const body = { name, email, password }

		const user = await User.create(body)

		res.status(201).json({ user })
	}
}
