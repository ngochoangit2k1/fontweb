import db from "../../../../backend/models/index";
import {
  GLOBAL_SWITCH,
  GLOBAL_STATUS,
} from "../../../../backend/constants/common.constant";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import { where } from "sequelize";

export default async function handle(req, res, next) {
  if (req.method === "GET") {
    const { categorySlug, getMainImage } = req.query;
    const category = await db.ProductCategory.findOne({
      where: { categorySlug },
      attributes: ["id"],
    });
    console.log("checkc",category.id)
  

    const products = await db.Product.findAndCountAll({
      where: {  categoryId: category.id },
      include: [
        {
          model: db.ProductCategory,
          as: 'productCategory',
          where: { status: GLOBAL_STATUS.ACTIVE },
        },
        {
          model: db.ProductImage,
          as: 'productImage',
          separate: true,
          where: {
            isMain: getMainImage
              ? GLOBAL_SWITCH.ON
              : [GLOBAL_SWITCH.ON, GLOBAL_SWITCH.OFF],
          },
        },
        {
          model: db.ProductInventory,
          as: 'productInventory',
          separate: true,
        },

        // {
        //   model: db.Discount,
        //   as: 'discount',
        //   required: !!discount,
        //   where: { status: GLOBAL_STATUS.ACTIVE },
        // },
        { model: db.User, as: 'user' },
      ],
    });

    if (!products) {
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "get_product",
        code: FIELD_ERROR.PRODUCT_NOT_FOUND,
        message: "Product not found",
      });
    }

    return res.status(200).json(products);
  }
  if (req.method === "POST") {

  

    const products = await db.Product.findAndCountAll({
      where: {  categoryId: req.body.categoryId },
      include: [
        {
          model: db.ProductCategory,
          as: 'productCategory',
          where: { status: GLOBAL_STATUS.ACTIVE },
        },
        {
          model: db.ProductImage,
          as: 'productImage',
          separate: true,
         
        },
        {
          model: db.ProductInventory,
          as: 'productInventory',
          separate: true,
        },

        // {
        //   model: db.Discount,
        //   as: 'discount',
        //   required: !!discount,
        //   where: { status: GLOBAL_STATUS.ACTIVE },
        // },
        { model: db.User, as: 'user' },
      ],
    });

    if (!products) {
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "get_product",
        code: FIELD_ERROR.PRODUCT_NOT_FOUND,
        message: "Product not found",
      });
    }

    return res.status(200).json(products);
  }
}
