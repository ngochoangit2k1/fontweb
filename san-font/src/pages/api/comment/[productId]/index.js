import db from "../../../../backend/models/index.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import pagingParse from "../../../../backend/middleware/paging.middleware.js";
export default async function (req, res, next) {
  if (req.method === "GET") {
    pagingParse(req, res);

    const { offset, limit } = req.paging;
    console.log(req.query.productId);
    const id = req.query.productId;

    try {
      const products = await db.Product.findOne({
        where: { id },
      });
      console.log(products);
      if (products) {
        const comment = await db.CommentProduct.findAndCountAll({
          where: { productId: id },
          offset,
          limit,
        });
        return res.status(200).json(comment);
      } else {
        return  res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "comment_product",
          code: FIELD_ERROR.PRODUCT_NOT_FOUND,
          message: "Product not found",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
