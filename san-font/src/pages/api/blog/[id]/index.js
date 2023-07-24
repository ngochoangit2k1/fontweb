import db from "../../../../backend/models/index.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import pagingParse from "../../../../backend/middleware/paging.middleware.js";

export default async function (req, res, next) {
  if (req.method === "GET") {
    pagingParse(req, res);

    const { offset, limit } = req.paging;
  
    const id = req.query.id;

    try {
      const blog = await db.Blog.findOne({
        where: { id : id },
        include: {model: db.BlogImage, as: "blogImage"}
      });
      
    } catch (err) {
      console.log(err);
    }
  }
}
