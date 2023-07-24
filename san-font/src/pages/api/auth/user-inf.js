import { USER_STATUS, USER_CODE } from "../../../backend/models/user/user.js";
import db from "../../../backend/models/index.js";
import checkToken from "../../../backend/authentication/auth.authentication.js";

export async function userInfo(req, res) {
  try {
    const user = req.user.data;
    console.log("checkaaaa", user);

    const accountInfo = await db.User.findOne({
      where: {
        id: user.id,
      },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: db.UserInformation,
          as: "userInformation",
        },
        {
          model: db.UserAddress,
          as: "userAddress",
        },
      ],
    });

    if (!accountInfo) {
      // throw badRequest(
      //   "get_user_info",
      //   FIELD_ERROR.USER_NOT_FOUND,
      //   "User not found"
      // );
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "credential",
        code: FIELD_ERROR.WRONG_PASSWORD,
        message: "Wrong password",
      });
    }
    if (accountInfo.status !== USER_STATUS.ACTIVE) {
      // throw badRequest(
      //   "get_user_info",
      //   FIELD_ERROR.USER_NOT_ACTIVE,
      //   "User not active."
      // );
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "credential",
        code: FIELD_ERROR.WRONG_PASSWORD,
        message: "Wrong password",
      });
    }

    return { ...accountInfo.toJSON() };
  } catch (e) {
    console.log("ERROR_GET_ACCOUNT_INFO: ", e);
    throw e;
  }
}
