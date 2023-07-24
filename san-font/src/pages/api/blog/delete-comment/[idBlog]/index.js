import db from "../../../../../backend/models/index";
import {
  FIELD_ERROR,
  HTTP_ERROR,
} from "../../../../../backend/errors/error.js";

export default async function handle(req, res, next) {
  if (req.method === "DELETE") {
    const { comment } = req.body;
    const id = req.query.idComment;
    console.log(comment);
    const cmt = await db.CommentProduct.findOne({ where: { id } });
    console.log(cmt);
    if (!cmt) {
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "find-comment",

        code: FIELD_ERROR.USER_NOT_ACTIVE,
        message: "Comment not found",
      });
    }

    await db.CommentProduct.destroy({ where: { id } })
      .then((newComment) => {
        res.status(200).json("success");
      })
      .catch((err) => {
        return res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "delete-comment",

          code: FIELD_ERROR.ACCOUNT_NOT_FOUND,
          message: "Failed delete comment",
        });
      });
  }
}
