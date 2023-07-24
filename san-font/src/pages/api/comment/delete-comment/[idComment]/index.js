import db from "../../../../../backend/models/index";
import {
  FIELD_ERROR,
  HTTP_ERROR,
} from "../../../../../backend/errors/error.js";

export default async function handle(req, res, next) {
  if (req.method === "DELETE") {
    const id = req.query.idBlog;
    const blg = await db.Blog.findOne({ where: { id } });
    console.log(blg);
    if (!blg) {
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "find-comment",

        code: FIELD_ERROR.USER_NOT_ACTIVE,
        message: "Comment not found",
      });
    }

    await db.Blog.destroy({ where: { id } })
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
