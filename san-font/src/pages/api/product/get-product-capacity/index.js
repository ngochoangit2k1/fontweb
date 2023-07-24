import db from "../../../../backend/models/index.js";

export default async function handle(req, res, next) {
  if (req.method === "GET") {
    const products = await db.ProductDetail.findOne({
      where: req.query,
    });
    console.log("body", body);
    return res.status(200).json(products);
  }
}
