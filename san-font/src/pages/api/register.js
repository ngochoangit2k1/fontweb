import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectMongo()

		const { name, email, password } = req.body

		// check email đã đăng ký
		const duplicateEmail = await Users.findOne({ email })
		if (duplicateEmail)
			return res.status(401).json({ messge: 'email đã được sử dụng!' })

		const body = { name, email, password }

		const user = await Users.create(body)

		res.status(201).json({ user })
	}
}
