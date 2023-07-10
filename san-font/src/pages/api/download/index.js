import db from "../../../backend/models/index.js";
import { FIELD_ERROR, HTTP_ERROR } from "@/backend/errors/error.js";

export default async function handle(req, res, next) {
  if (req.method === "POST") {
    const id = req.body.productId;

    const getDownload = await db.ProductInventory.findOne({
      where: {
        productId: id,
      },
    });
    const count = getDownload.quantity + 1;
    console.log("count: " + count);
    try {
      const product = await db.Product.findOne({
        where: { id: id },
        attributes: ["link"],
      });
      if (!product) {
        return res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "credential",
          code: FIELD_ERROR.PRODUCT_NOT_FOUND,
          message: "Link NOT FOUND",
        });
      }

      await Promise.all([
        db.Product.findOne({ where: { id: id } }),
        db.ProductInventory.update(
          { quantity: count },
          {
            where: { productId: id },
          }
        ),
      ]);

      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
    }
  }
}
