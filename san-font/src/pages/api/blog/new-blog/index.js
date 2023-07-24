import db from "../../../../backend/models/index.js";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import checkToken from "../../../../backend/authentication/auth.authentication.js";
import cloudinary from "../../../../backend/common/cloudinary.service.js";

export default async function hander(req, res, next) {
  const { title, content, images } = req.body;

  if (req.method === "POST") {
    checkToken(req, res);

    const user = req.user.data;

    const t = await db.sequelize.transaction();
    const images = [
      "F:/thuctap/New folder/fontweb/san-font/src/images/1.jpg",
      "F:/thuctap/New folder/fontweb/san-font/src/images/2.jpg",
      "F:/thuctap/New folder/fontweb/san-font/src/images/3.jpg",
      "F:/thuctap/New folder/fontweb/san-font/src/images/4.jpg",
      "F:/thuctap/New folder/fontweb/san-font/src/images/5.jpg",
      "F:/thuctap/New folder/fontweb/san-font/src/images/6.jpg",
      "F:/thuctap/New folder/fontweb/san-font/src/images/7.jpg",
    ];
    const newBlog = await db.Blog.create({
      userId: user.id,
      title,
      content,
    });
    if (!newBlog) {
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "blog",
        code: FIELD_ERROR.SLUG_IS_EXISTS,
        message: "Blog faild",
      });
    }

    try {
      for (const sub_Image of images) {
        const result = await cloudinary.uploader.upload(sub_Image, {
          folder: "blog",
          with: 1200,
          scrop: "scale",
        });

        await db.BlogImage.create({
          id: result.public_id,
          blogId: newBlog.id,
          image: result.secure_url,
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "blog",
        code: FIELD_ERROR.SLUG_IS_EXISTS,
        message: "Blog faild",
      });
    }

    return res.status(200).json("thanh cong");
  }

 
}
