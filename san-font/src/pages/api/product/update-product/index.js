import { updateProductValidator } from "../../../../backend/validator/product.validator";
import db from "../../../../backend/models/index";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import {
  GLOBAL_STATUS,
  GLOBAL_SWITCH,
} from "../../../../backend/constants/common.constant";
const { Op } = db.Sequelize;

export default async function handle(req, res, next) {
  if (req.method === "PUT") {
    await updateProductValidator(req.body, res);

    const t = await db.sequelize.transaction();
    let subProductId = 0;
    const updateProductForm = req.body;
    try {
      if (updateProductForm.productSlug) {
        const slugExist = await db.Product.findOne({
          where: {
            productSlug: updateProductForm.productSlug,
            id: { [Op.not]: updateProductForm.id },
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

      // Create order detail
      await db.Product.update(updateProductForm, {
        where: { id: updateProductForm.id },
        transaction: t,
      });

      // Delete old product inventory & detail
      await db.ProductInventory.destroy({
        where: {
          productId: updateProductForm.id,
        },
        transaction: t,
      });

      await db.ProductDetail.destroy({
        where: {
          productId: updateProductForm.id,
        },
        transaction: t,
      });

      // Create new detail product
      for (const subProduct of updateProductForm.productDetail) {
        await db.ProductDetail.create(
          {
            ...subProduct,
            id: subProductId,
            productId: updateProductForm.id,
          },
          {
            transaction: t,
          }
        );

        await db.ProductInventory.create(
          {
            productId: updateProductForm.id,
            subProductId,
            quantity: subProduct.quantity,
          },
          {
            transaction: t,
          }
        );
        subProductId += 1;
      }

      // Delete old main image
      await db.ProductImage.destroy({
        where: {
          productId: updateProductForm.id,
        },
      });
      // Create main image
      await db.ProductImage.create(
        {
          productId: updateProductForm.id,
          image: updateProductForm.mainImage,
          isMain: GLOBAL_SWITCH.ON,
          status: GLOBAL_STATUS.ACTIVE,
        },
        {
          transaction: t,
        }
      );

      // Create sub-image
      for (const subImage of updateProductForm.subImage) {
        // Create main image
        await db.ProductImage.create(
          {
            productId: updateProductForm.id,
            image: subImage.url,
            isMain: GLOBAL_SWITCH.OFF,
            status: GLOBAL_STATUS.ACTIVE,
          },
          {
            transaction: t,
          }
        );
      }

      // Commit transaction
      await t.commit();

      return res.status(200).json(true);
    } catch (e) {
      console.log("ERROR_UPDATE_PRODUCT: ", e);
      if (t) await t.rollback();
      throw e;
    }
  }
}
