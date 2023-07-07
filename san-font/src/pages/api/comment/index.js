import db from "../../../backend/models/index.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../backend/errors/error";
import checkToken from "../../../backend/authentication/auth.authentication.js";

export default async function hander(req, res, next) {
  const createCommentForm = req.body;

  if (req.method === "POST") {
    checkToken(req, res);
    const user = req.user.data;

    const t = await db.sequelize.transaction();

    // const userInfo = await db.User.findOne({
    //   where: { id: user.id },
    // });
  
    try {
      const newComment = await db.CommentProduct.create({
        productId: createCommentForm.productId,
        userId: user.id,
        comment: createCommentForm.comment,
      });
      console.log(newComment);
      return res.status(200).json({ newComment });
    } catch (error) {
      console.log(error);
    }
  }
  if (req.method === "GET") {
    const conditions = {};
    try {
      const products = await db.CommentProduct.findAndCountAll({
        where: conditions,
      });
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
