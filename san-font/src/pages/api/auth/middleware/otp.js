import db from '../../../../backend/models/index.js'
import { mailAwsService } from '../../../../backend/common/ses.service.js'
import {
	FIELD_ERROR,
	HTTP_ERROR,
	badRequest,
} from '../../../../backend/errors/error.js'
import { USER_STATUS } from '../../../../backend/models/user/user.js'

import { OTP_CODE_TYPE } from '../../../../backend/constants/common.constant.js'
import { generateVerifyCode } from '../../../../backend/utils/helper.util.js'

import { OTP_STATUS } from '../../../../backend/models/otp.js'
import { where } from 'sequelize'

const { Op } = db.Sequelize

const userNameFilter = ['admin', 'www', 'support', 'email']

/**
 * Check email or phone in user and merchant model
 * @param {*} [userConditions] - additional User conditions
 * @param {*} [role] - Role: (User, UserMerchant, Merchant) is checking
 */
export async function checkUserExisted(req, res) {
	// const phone = `+${phoneCode}${phoneNumber}`;
	// console.log("EMAIL", req.email);
	const email = req?.email
	console.log('rest', email)
	const userConditions = {}

	// Check in user model
	if (email) {
		const emailExisted = await db.User.findOne({
			where: { email, ...userConditions },
		})
		console.log(emailExisted)
		const result = await checkUserExisted(email, res)
		if (emailExisted) {
			return res.status(HTTP_ERROR.BAD_REQUEST).json({
				name: 'register-user-email',
				code: FIELD_ERROR.EMAIL_IS_USED,
				message: `Email ${email} is used`,
			})
		}
	}

	// if (phoneCode && phoneNumber) {
	//   const phoneExisted = await db.User.findOne({
	//     where: { phoneCode, phoneNumber, ...userConditions },
	//   });
	//   if (phoneExisted) {
	//     return res.status(HTTP_ERROR.BAD_REQUEST).json({
	//       name: "register-user-email",
	//       code: FIELD_ERROR.PHONE_NUMBER_IS_USED,
	//       message: `Email ${email} is used`,
	//     });
	//   }
	// }

	// if (name) {
	//   const nameExisted = await db.User.findOne({
	//     where: {
	//       username: { [Op.eq]: name },
	//       ...userConditions,
	//     },
	//   });
	//   if (nameExisted) {
	//     return res.status(HTTP_ERROR.BAD_REQUEST).json({
	//       name: "register-username",
	//       code: FIELD_ERROR.USER_NAME_IS_EXITED,
	//       message: `User name ${name} is existed`,
	//     });
	//   }
	// }

	if (email && userNameFilter.indexOf(email.trim().toLowerCase()) >= 0) {
		return res.status(HTTP_ERROR.BAD_REQUEST).json({
			name: 'register-email',
			code: FIELD_ERROR.EMAIL_NOT_ALLOW_REGISTER,
			message: `Email ${email} is not allow to register`,
		})
	}

	return true
}

/**
 * Check user and merchant not exist
 * @param {*} email
 * @param {*} phoneCode
 * @param {*} phoneNumber
 */
async function checkUserNotExist(email) {
	if (email) {
		// check User
		const user = await db.User.findOne({
			where: { email, status: USER_STATUS.ACTIVE },
		})
		if (!user) {
			return res.status(HTTP_ERROR.BAD_REQUEST).json({
				name: 'send-email-otp',
				code: FIELD_ERROR.ACCOUNT_NOT_FOUND,
				message: `Email not found`,
			})
		}
	}
}

/**
 * Send otp code
 * @param {*} param0
 * @returns
//  */
export async function sendOtpCode(req, res) {
	try {
		const { email, phoneCode, phoneNumber, type } = req.body
		const phone = `+${phoneCode}${phoneNumber}`
		const key = `${type}_${(email && email.trim()) || phone}`
		console.log('key', key)
		const checkEmail = await db.User.findOne({ where: { email: email } })
		console.log('check', checkEmail)
		if (!checkEmail) {
			res.status(400).json('email khong ton tai')
		}
		const getKey = await db.OTP.findOne({
			where: {
				key: key,
				status: OTP_STATUS.ACTIVE,
			},
		})

		if (getKey) {
			await db.OTP.update(
				{ status: OTP_STATUS.DELETE, deletedAt: new Date() },
				{
					where: {
						key: key,
					},
				}
			)
		}

		let subject
		switch (type) {
			case OTP_CODE_TYPE.FORGOT_PASSWORD: {
				subject = 'Reset password'
				await checkUserNotExist(email)
				break
			}
			default:
				subject = 'Verify email'
		}

		const code = generateVerifyCode()
		await db.OTP.create({
			key,
			code,
			status: OTP_STATUS.ACTIVE,
		})

		if (email) {
			const toEmails = [email]
			const params = { code }
			const templateName = 'otp-code-template'
			await mailAwsService.sendMail({
				toEmails,
				subject,
				templateName,
				params,
			})
		}

		return true
	} catch (e) {
		console.log('EVENT_ERROR_SEND_OTP: ', e)
		throw e
	}
}

// /**
//  * Check otp code
//  * @param {*} param0
//  * @returns
//  */
export async function checkOtpCode(req, res) {
	

		const {email, type, otpCode, phone} = req
		
		const key = `${type}_${email || phone}`
		console.log('test', { email, phone, type, otpCode })
		console.log('key', key)
		const getOtpCode = await db.OTP.findOne({
			where: {
				key,
				status: OTP_STATUS.ACTIVE,
			},
		})

		if (!getOtpCode) {
			return res.status(HTTP_ERROR.BAD_REQUEST).json({
				name: 'check-otp-code',
				code: FIELD_ERROR.OTP_CODE_EXPIRED,
				message: 'OTP code expired',
			})
			
		}
		if (otpCode !== getOtpCode.code) {
			return res.status(HTTP_ERROR.BAD_REQUEST).json({
				name: 'check-otp-code',
				code: FIELD_ERROR.OTP_CODE_INVALID,
				message: 'OTP code invalid',
			})
		}

		return getOtpCode.code
	}


/**
 * Delete otp code
 * @param {*} param0
 */
export async function deleteOtpCode({ email, phone, type }) {
	const key = `${type}_${email || phone}`
	await db.OTP.update(
		{ status: OTP_STATUS.DELETE, deletedAt: new Date() },
		{
			where: {
				key: key,
			},
		}
	)
}
