import { createCategoryValidator } from "../../../../backend/validator/product.validator";
import db from "../../../../backend/models/index.js";
import { GLOBAL_STATUS } from "../../../../backend/constants/common.constant";
import checkToken from "../../../../backend/authentication/auth.authentication.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
export default async function handler(req, res, next) {
  if (req.method == "POST") {
    checkToken(req, res);
    await createCategoryValidator(req.body, res);
    const body = req.body;
    try {
      const category = {
        ...body,
        status: GLOBAL_STATUS.ACTIVE,
      };

      if (category.categorySlug) {
        const slugExist = await db.ProductCategory.findOne({
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

      await db.ProductCategory.create(category);
      return res.status(200).json("success");
    } catch (e) {
      console.log("ERROR_CREATE_CATEGORY: ", e);
      throw e;
    }
  }
}
