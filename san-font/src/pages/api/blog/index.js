import db from "../../../backend/models/index.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../backend/errors/error";
import checkToken from "../../../backend/authentication/auth.authentication.js";
import cloudinary from "../../../backend/common/cloudinary.service.js";

export default async function hander(req, res, next) {
  if (req.method === "GET") {
    pagingParse(req, res);
    const { offset, limit } = req.paging;
    const conditions = {};
    try {
      const products = await db.Blog.findAndCountAll({
        where: conditions,
        include: [{ model: db.BlogImage, as: "blogImage" }],
        offset,
        limit,
      });
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
