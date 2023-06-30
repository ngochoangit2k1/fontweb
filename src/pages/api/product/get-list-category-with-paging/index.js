import pagingParse from "../../../../backend/middleware/paging.middleware";
import db from "../../../../backend/models/index.js";

export async function hander(req, res, next) {
    if (req.method ==='GET'){
  pagingParse(req, res);

  const { offset, limit, order } = req.paging;
  const { name, status } = req.query;
  const conditions = {};

  name && (conditions.name = { [Op.like]: `%${name.trim()}%` });
  status && (conditions.status = status);

  const listProductCategory = await db.ProductCategory.findAndCountAll({
    where: conditions,
    offset,
    limit,
    order,
  });

  return res.status(200).json(listProductCategory);}
}
