import { sendOtpCode } from '../middleware/otp'
import { sendOtpValidator } from '../../../../backend/validator/otp.validator.js'

export default async function handler(req, res, next) {
	if (req.method === 'POST') {
		await sendOtpValidator(req.body, res)
		await sendOtpCode(req, res)
		return res.status(200).json({ message: 'success' })
	}
}
