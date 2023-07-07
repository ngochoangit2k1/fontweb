import db from "../../../../../backend/models/index";
import { GLOBAL_STATUS } from "../../../../../backend/constants/common.constant";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../../backend/errors/error";

export default async function handle(req, res, next) {
  const id = req.query.id;
  if (req.method === "GET") {
    const products = await db.Product.findOne({
      where: { id },
      include: [
        {
          model: db.ProductCategory,
          as: "productCategory",
          where: { status: GLOBAL_STATUS.ACTIVE },
        },
        {
          model: db.ProductImage,
          as: "productImage",
        },
        {
          model: db.ProductInventory,
          as: "productInventory",
        },
        {
          model: db.ProductDetail,
          as: "productDetail",
        },
        {
          model: db.Discount,
          as: "discount",
        },
      ],
      order: [["productDetail", "id", "ASC"]],
    });

    if (!products) {
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "get_product",
        code: FIELD_ERROR.PRODUCT_NOT_FOUND,
        message: "Product not found",
      });
    }

    return res.status(200).json({ products });
  }
  if (req.method == "DELETE") {
    try {
      await db.Product.destroy({ where: { id } });
      await db.ProductImage.destroy({ where: { productId: id } });
      await db.ProductInventory.destroy({ where: { productId: id } });
      await db.ProductDetail.destroy({ where: { productId: id } });
      return res.status(200).json( { message : 'True'});
    } catch (e) {
      console.log("ERROR_DELETE_PRODUCT: ", e);
      throw e;
    }
  }
}
