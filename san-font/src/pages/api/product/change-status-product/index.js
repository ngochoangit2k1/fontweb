import { changeStatusProductValidator } from "../../../../backend/validator/product.validator";
import db from "../../../../backend/models/index";


export default async function handle(req, res, next) {
    if (req.method === "PUT") {
        try {
            await changeStatusProductValidator(req.body, res)
            const body = req.body;
            await db.Product.update(
              { status: body.status },
              { where: { id: body.id } }
            );
            return res.status(200).json(true);
          } catch (e) {
            console.log("ERROR_UPDATE_STATUS: ", e);
            throw e;
          }
    }
}
