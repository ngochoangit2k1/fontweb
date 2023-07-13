import db from "../../../../backend/models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FIELD_ERROR, HTTP_ERROR } from "../../../../backend/errors/error.js";
import { loginValidator } from "../../../../backend/validator/auth.validator.js";
//

//
export default async function handler(req, res) {
  if (req.method === "POST") {
    const model = db.User;
    const { email, password } = req.body;
    await loginValidator(req.body, res);
    if (!email || email.length === 0 || !password || password.length === 0) {
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "credential",
        code: FIELD_ERROR.EMAIL_OR_PASSWORD_INVALID,
        message: "EMAIL OR PASSWORD INVALID",
      });
    }
    const user = await model.findOne({
      where: { email },
      include: [
        {
          model: db.UserInformation,
          as: 'userInformation',
        }
      ]
    });
    console.log("user", user);
    if (user /*check not null*/) {
      await bcrypt.compare(user.password, password);

      const isMatched = await bcrypt.compare(password, user.password);

      if (isMatched) {
        let token = jwt.sign(
          { data: user },
          process.env.JWTPrivateKey,
          { expiresIn: "10 days" } //thời gian tồn tại của token
        );
        const userJson = { ...user.toJSON() };
        //clone add more properties
        await db.UserInformation.update(
          { lastLogin: new Date() },
          {
            where: {
              userId: user.id,
            },
          }
        );

        return res.status(200).json({
          user: userJson,

          token: token,
        });
      } else {
        res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "credential",
          code: FIELD_ERROR.WRONG_PASSWORD,
          message: "Wrong password",
        });
      }
    } else {
       res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "credential",
        code: FIELD_ERROR.EMAIL_NOT_FOUND,
        message: "EMAIL NOT FOUND",
      });
    }
  }
}
