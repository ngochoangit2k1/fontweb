import db from '../../../../backend/models/index.js'
import { FIELD_ERROR, HTTP_ERROR } from '../../../../backend/errors/error.js'
import { resetPasswordValidator } from '../../../../backend/validator/auth.validator.js'
import {
	OTP_CODE_TYPE,
	ROLE,
} from '../../../../backend/constants/common.constant.js'
import { checkOtpCode, deleteOtpCode } from '../middleware/otp.js'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await resetPasswordValidator(req.body, res)
		const { email, password, rePassword, otpCode } = req.body
		const test = { email, type: OTP_CODE_TYPE.FORGOT_PASSWORD, otpCode }
		await checkOtpCode(test, res)
		if (password !== rePassword) {
			res.status(HTTP_ERROR.BAD_REQUEST).json({
				name: 'password',
				code: FIELD_ERROR.PASSWORD_NOT_MATCH,
				message: 'Password is not match with re password.',
			})
		}

		const user = await db.User.findOne({ where: { email } })

		if (!user) {
			res.status(HTTP_ERROR.BAD_REQUEST).json({
				name: 'update-password',

				code: FIELD_ERROR.ACCOUNT_NOT_FOUND,
				message: 'Email not found',
			})
		}

		const model = db.User

		const passwordHash = model.hashPassword(password)
		await model.update(
			{
				password: passwordHash,
			},
			{
				where: { email },
			}
		)

		await deleteOtpCode({ email, type: OTP_CODE_TYPE.FORGOT_PASSWORD })
		return res.status(200).json({ message: 'success' })
	}
}
