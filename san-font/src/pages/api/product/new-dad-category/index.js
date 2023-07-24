import { createDadCategoryValidator } from "../../../../backend/validator/product.validator";
import db from "../../../../backend/models/index.js";
import { GLOBAL_STATUS } from "../../../../backend/constants/common.constant";
import checkToken from "../../../../backend/authentication/auth.authentication.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
export default async function handler(req, res, next) {
  if (req.method === "GET") {
    const listProductCategory = await db.Category.findAll({
      where: { status: GLOBAL_STATUS.ACTIVE },
    });

    return res.status(200).json(listProductCategory);
  }
  if (req.method == "POST") {
    checkToken(req, res);
    await createDadCategoryValidator(req.body, res);
    const body = req.body;
    try {
      const category = {
        ...body,
        status: GLOBAL_STATUS.ACTIVE,
      };

      if (category.categorySlug) {
        const slugExist = await db.Category.findOne({
          where: {
            categorySlug: body.categorySlug,
          },
        });

        // Check create order detail
        if (slugExist) {
          return res.status(HTTP_ERROR.BAD_REQUEST).json({
            name: "check_slug",
            code: FIELD_ERROR.SLUG_IS_EXISTS,
            message: "Slug is exists",
          });
        }
      }

      await db.Category.create(category);
      return res.status(200).json("success");
    } catch (e) {
      console.log("ERROR_CREATE_CATEGORY: ", e);
      throw e;
    }
  }
}
