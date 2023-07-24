import db from "../../../../backend/models/index.js";
import { checkUserExisted } from "../middleware/otp.js";
import {
  USER_STATUS,
  USER_CODE,
} from "../../../../backend/models/user/user.js";
import { getNextUserCode } from "../../../../backend/utils/allCode.utils.js";
import { registerUserValidator } from "../../../../backend/validator/auth.validator.js";
import { FIELD_ERROR, HTTP_ERROR } from "../../../../backend/errors/error.js";
// import { apiHandler, usersRepo } from 'helpers/api';

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, fullName, referralCode, password, username } = req.body;
    await registerUserValidator(req.body, res);
    await checkUserExisted(req.body, res);

    // check user referral
    let userRef;
    if (referralCode) {
      const refType = referralCode.trim().replace(/\d+/g, "");
      if (![USER_CODE].includes(refType)) {
        return res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "register-user-email",
          code: FIELD_ERROR.REFERRAL_CODE_INVALID,
          message: "Referral code invalid",
        });
      }
      userRef = await db.User.findOne({
        where: {
          userCode: referralCode,
        },
      });

      if (!userRef) {
        return res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "register-user-email",
          code: FIELD_ERROR.REFERRER_NOT_EXIST_OR_NOT_ACTIVE_EMAIL,
          message: "Referrer does not exist or has not activated email",
        });
      }
    }

    const passwordHash = db.User.hashPassword(password);
    const t = await db.sequelize.transaction();

    try {
      const referrerCode = referralCode && referralCode.trim();
      const userCode = await getNextUserCode(db.User);

      const newUser = await db.User.create(
        {
          userCode: `${USER_CODE}${userCode}`,
          email: email,
          username: username,
          password: passwordHash,
          status: USER_STATUS.ACTIVE,
          level: 0,
          role: 3,
          userInformation: {
            fullName: fullName,
          },
        },
        {
          include: [
            {
              model: db.UserInformation,
              as: "userInformation",
            },
          ],
          transaction: t,
        }
      );

      if (userRef) {
        const genealogyPath = await getGenealogyPath(userRef.id);

        await db.UserReferral.create(
          {
            registerCode: `${USER_CODE}${userCode}`,
            registerId: newUser.id,
            referrerCode,
            referrerId: userRef.id,
            genealogyPath: genealogyPath
              ? `${genealogyPath}.${newUser.id}`
              : `${userRef.id}.${newUser.id}`,
          },
          {
            transaction: t,
          }
        );
      }

      await t.commit();

      return res.status(200).json({ newUser });
    } catch (e) {
      if (t) await t.rollback();
      throw e;
    }
  }
}
