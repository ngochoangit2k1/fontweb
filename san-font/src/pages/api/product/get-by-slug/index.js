import db from "../../../../backend/models/index";
import {GLOBAL_SWITCH, GLOBAL_STATUS} from "../../../../backend/constants/common.constant"
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";


export default async function handle(req, res, next) {
  if (req.method === "GET") {
    const { productSlug, getMainImage } = req.query;
    console.log( req.query)
    const conditions = {
      status: GLOBAL_STATUS.ACTIVE,
    };

    productSlug && (conditions.productSlug = productSlug);

    const products = await db.Product.findOne({
      where: conditions,
      include: [
        {
          model: db.ProductCategory,
          as: "productCategory",
          where: { status: GLOBAL_STATUS.ACTIVE },
        },
        {
          model: db.ProductInventory,
          as: "productInventory",
        },
        {
          model: db.Discount,
          as: "discount",
          required: false,
          where: { status: GLOBAL_STATUS.ACTIVE },
        },
        {
          model: db.ProductDetail,
          as: "productDetail",
          separate: true,
        },
        {
          model: db.ProductImage,
          as: "productImage",
          separate: true,
          where: {
            isMain: getMainImage
              ? GLOBAL_SWITCH.ON
              : [GLOBAL_SWITCH.ON, GLOBAL_SWITCH.OFF],
          },
        },
      ],
    });

    if (!products) {
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "get_product",
        code: FIELD_ERROR.PRODUCT_NOT_FOUND,
        message: "Product not found",
      });
    }

    return res.status(200).json( products);
  }
}
