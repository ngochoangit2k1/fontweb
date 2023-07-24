import checkToken from "../../../../backend/authentication/auth.authentication.js";
import pagingParse from "../../../../backend/middleware/paging.middleware.js";
import db from "../../../../backend/models/index.js";
import {
  GLOBAL_STATUS,
  GLOBAL_SWITCH,
} from "../../../../backend/constants/common.constant.js";
const { Op } = db.Sequelize;

export default async function handler(req, res) {
  pagingParse(req, res);
  //   checkToken(req, res);

  if (req.method === "POST") {
    const products = await db.ProductCategory.findOne({
      where: { categorySlug: req.body.category_slug },
    });

    return res.status(200).json({ products });
  }
}
