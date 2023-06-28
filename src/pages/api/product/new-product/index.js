import { createProductValidator } from "../../../../backend/validator/product.validator";
import db from "../../../../backend/models/index.js";

export default async function handle(req, res, next) {
  if (req.method === "POST") {
    await createProductValidator(req.body, res);

    const t = await db.sequelize.transaction();
    let subProductId = 0;
    const createProductForm = req.body
    try {
      if (createProductForm.productSlug) {
        const slugExist = await db.Product.findOne({
          where: {
            productSlug: createProductForm.productSlug,
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

      // Create order detail
      const product = await db.Product.create(createProductForm, {
        transaction: t,
      });

      // Check create order detail
      if (!product) {
        res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "create_product",
          code: FIELD_ERROR.CREATE_PRODUCT_FAILED,
          message: "Create product not success",
        });
      }

      // Create detail product
      for (const subProduct of createProductForm.productDetail) {
        await db.ProductDetail.create(
          {
            id: subProductId,
            ...subProduct,
            productId: product.id,
          },
          {
            transaction: t,
          }
        );

        await db.ProductInventory.create(
          {
            productId: product.id,
            subProductId,
            quantity: subProduct.quantity,
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
          image: createProductForm.mainImage,
          isMain: GLOBAL_SWITCH.ON,
          status: GLOBAL_STATUS.ACTIVE,
        },
        {
          transaction: t,
        }
      );

      // Create sub-image
      for (const subImage of createProductForm.subImage) {
        // Create main image
        await db.ProductImage.create(
          {
            productId: product.id,
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

      return true;
    } catch (e) {
      console.log("ERROR_CREATE_PRODUCT: ", e);
      if (t) await t.rollback();
      throw e;
    }
  }


}
