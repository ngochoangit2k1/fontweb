import db from "../../../backend/models/index.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../backend/errors/error";
import checkToken from "../../../backend/authentication/auth.authentication.js";
import pagingParse from "../../../backend/middleware/paging.middleware.js";

export default async function hander(req, res, next) {
  const createCommentForm = req.body;

  if (req.method === "POST") {
    checkToken(req, res);
    const user = req.user.data;

    const t = await db.sequelize.transaction();

    try {
      const newComment = await db.CommentProduct.create({
        productId: createCommentForm.productId,
        userId: user.id,
        comment: createCommentForm.comment,
      });

      return res.status(200).json({ newComment });
    } catch (error) {
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "comment",

        code: FIELD_ERROR.ACCOUNT_NOT_FOUND,
        message: "Failed update comment ",
      });
    }
  }

  if (req.method === "GET") {
    pagingParse(req, res);
    const { offset, limit } = req.paging;

    const conditions = {};
    try {
      const products = await db.CommentProduct.findAndCountAll({
        where: conditions,
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
