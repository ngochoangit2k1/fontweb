import db from "../../../backend/models/index.js";

export default async function hander(req, res, next) {
  if (req.method === "GET") {
    pagingParse(req, res);
    const { offset, limit } = req.paging;
    const conditions = {};
    try {
      const blog = await db.Blog.findAndCountAll({
        where: conditions,
        include: [{ model: db.BlogImage, as: "blogImage" }],
        offset,
        limit,
      });
      return res.status(200).json(blog);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
