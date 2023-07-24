import { createProductValidator } from "../../../../backend/validator/product.validator";
import db from "../../../../backend/models/index.js";
import cloudinary from "../../../../backend/common/cloudinary.service.js";

import {
  GLOBAL_SWITCH,
  GLOBAL_STATUS,
} from "../../../../backend/constants/common.constant";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import checkToken from "@/backend/authentication/auth.authentication";

export default async function handle(req, res, next) {
  checkToken(req, res);

  if (req.method === "POST") {
    // await createProductValidator(req.body, res);

    const t = await db.sequelize.transaction();
    let subProductId = 0;
    const {
      categoryId,
      link,
      description,
      mainImage,
      name,
      author,
      productDetail,
      vip,
      subImage,
      productSlug,
    } = req.body;

    try {
      if (productSlug) {
        const slugExist = await db.Product.findOne({
          where: {
            productSlug: productSlug,
          },
        });

        // Check create order detail
        if (slugExist) {
          res.status(HTTP_ERROR.BAD_REQUEST).json({
            name: "check_slug",
            code: FIELD_ERROR.SLUG_IS_EXISTS,
            message: "Slug is exists",
          });
        }
      }

      const product = await db.Product.create(
        {
          userId: req.user.data.id,
          categoryId,
          link,
          description,
          mainImage,
          name,
          author,
          productDetail,
          vip,
        },
        {
          transaction: t,
        }
      );
      console.log("chwck ", product);
      // Check create order detail
      if (!product) {
        return res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "create_product",
          code: FIELD_ERROR.CREATE_PRODUCT_FAILED,
          message: "Create product not success",
        });
      }

      // Create detail product
      for (const subProduct of productDetail) {
        await db.ProductInventory.create(
          {
            productId: product.id,
            subProductId,
            quantity: 0,
          },
          {
            transaction: t,
          }
        );
        subProductId += 1;
      }

      // Create main image
      await db.ProductImage.create(
        {
          productId: product.id,
          image: mainImage,
          isMain: GLOBAL_SWITCH.ON,
          status: GLOBAL_STATUS.ACTIVE,
        },
        {
          transaction: t,
        }
      );

      // Create sub-image
      for (const sub_Image of subImage) {
        // Create main image
        const result = await cloudinary.uploader.upload(sub_Image, {
          folder: "blog",
          with: 1200,
          scrop: "scale",
        });
        await db.ProductImage.create(
          {
            productId: product.id,
            image: sub_Image.image,
            id: result.public_id,
            image: result.secure_url,
          },
          {
            transaction: t,
          }
        );
      }

      // Commit transaction
      await t.commit();

      return res.status(200).json("success");
    } catch (e) {
      console.log("ERROR_CREATE_PRODUCT: ", e);
      if (t) await t.rollback();
      throw e;
    }
  }
}
