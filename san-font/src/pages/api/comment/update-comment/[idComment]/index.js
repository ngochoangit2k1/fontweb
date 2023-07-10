import db from "../../../../../backend/models/index";
import {
  FIELD_ERROR,
  HTTP_ERROR,
} from "../../../../../backend/errors/error.js";

export default async function handle(req, res, next) {
  if (req.method === "POST") {
    const { comment } = req.body;
    const id = req.query.idComment;
    console.log(comment);
    const cmt = await db.CommentProduct.findOne({ where: { id } });
    console.log(cmt);
    if (!cmt) {
      return  res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "find-comment",

        code: FIELD_ERROR.USER_NOT_ACTIVE,
        message: "Comment not found",
      });
    }

    await db.CommentProduct.update({ comment: comment }, { where: { id } })
      .then((newComment) => {
        res.status(200).json("success");
      })
      .catch((err) => {
       return  res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "update-comment",

          code: FIELD_ERROR.ACCOUNT_NOT_FOUND,
          message: "Failed update comment",
        });
      });
  }
}
