import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectMongo()

		const { name, email, password } = req.body

		// check email đã đăng ký
		const duplicateEmail = await Users.findOne({ email })
		if (duplicateEmail) {
			const test = { ...duplicateEmail.toJSON() }
			console.log(test)
			return test
		}
	}
}
