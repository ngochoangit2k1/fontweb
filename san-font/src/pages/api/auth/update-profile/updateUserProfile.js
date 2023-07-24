import { userInfo } from "../user-inf";
import db from "../../../../backend/models/index.js";
const { Op } = db.Sequelize;

export async function updateUserProfile(req, res) {
  console.log("firstvv ", req.body);
  console.log("tesst1", req.user.data.id);
  const profile = await userInfo(req, res);
  console.log("profile", profile);
  const transaction = await db.sequelize.transaction();
  const formUpdate = req.body;
  const user = req.user.data;

  try {
    // if (!formUpdate.avatar) {
    //   await checkUserExisted(
    //     formUpdate.email,
    //     formUpdate.phoneCode,
    //     formUpdate.phoneNumber,
    //     formUpdate.username,
    //     { id: { [Op.not]: user.id } }
    //   );
    // }

    const dataUserUpdate = {
      phoneCode: formUpdate.phoneCode,
      phoneNumber: formUpdate.phoneNumber,
      username: formUpdate.username,
      address: formUpdate.address,
    };

    const dataUserInfoUpdate = {
      fullName: formUpdate.fullName,
      address: formUpdate.address,
      cityCode: formUpdate.cityCode,
      districtCode: formUpdate.districtCode,
      wardCode: formUpdate.wardCode,
      avatar: formUpdate.avatar,
    };

    await Promise.all([
      db.User.update(dataUserUpdate, {
        where: { id: profile.id },
        transaction,
      }),
      db.UserInformation.update(dataUserInfoUpdate, {
        where: { userId: profile.id },
        transaction,
      }),
    ]);

    await transaction.commit();
    return res.status(200).json("success");
  } catch (e) {
    console.log("ERROR_UPDATE_USER_PROFILE: ", e);
    if (transaction) await transaction.rollback();
    throw e;
  }
}
