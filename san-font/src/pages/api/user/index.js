import checkToken from "../../../backend/authentication/auth.authentication.js";
import pagingParse from "../../../backend/middleware/paging.middleware.js";
import db from "../../../backend/models/index.js";
import { USER_STATUS } from "../../../backend/models/user/user.js";
import { MODULE } from '../../../backend/constants/common.constant';

const { Op } = db.Sequelize;

export default async function handler(req, res) {
  pagingParse(req, res);
  checkToken(req, res,[MODULE.USER, MODULE.DASHBOARD]);

  if (req.method === "GET") {
    const data = async () => {
      const query = req;
      const { order, offset, limit } = req.paging;
      const { search, level, role } = query;
      console.log("query", limit);
      const conditions = {
        status: USER_STATUS.ACTIVE,
      };

      if (search) {
        conditions[Op.or] = [
          { email: { [Op.like]: `%${search}%` } },
          { username: { [Op.like]: `%${search}%` } },
          { userCode: { [Op.like]: `%${search}%` } },
          { phoneNumber: { [Op.like]: `%${search}%` } },
          { "$userInformation.fullName$": { [Op.like]: `%${search}%` } },
        ];
      }

      level && (conditions.level = level);
      role && (conditions.role = role);
      console.log("firstxxx", conditions);
      const result = await db.User.findAndCountAll({
        where: conditions,
        include: [
          {
            model: db.UserInformation,
            as: "userInformation",
          },
          {
            model: db.UserReferral,
            as: "userReferral",
          },
          {
            model: db.UserReferral,
            as: "userReferrer",
          },
        ],

        limit,
        offset,
      });

      return res.status(200).json(result);
    };

    return data();
  }
}
