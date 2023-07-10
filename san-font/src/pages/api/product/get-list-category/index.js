import db from "../../../../backend/models/index";
import { GLOBAL_STATUS } from "../../../../backend/constants/common.constant";

export default async function handle(req, res, next) {
  if (req.method === "GET") {
    const listProductCategory = await db.ProductCategory.findAll({
      where: { status: GLOBAL_STATUS.ACTIVE },
      include: [
        {
          model: db.Category,
          as: "category",
        },
      ],
    });

    return res.status(200).json(listProductCategory);
  }
}
