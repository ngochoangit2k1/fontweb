import { where } from "sequelize";
import db from "../../../backend/models/index.js";

export default async function handle(req, res, next) {
  if (req.method === "POST") {
    const id = req.body.productId
    console.log(id)
    const getDownload = await db.ProductInventory.findOne( {where:{
      productId: id,
    }});
    const count = getDownload.quantity + 1
    console.log("count: " + count)
    try {
        const check = await db.Product.findOne(  {where:{id : id},  attributes: ['link']})
        console.log(check)
      await Promise.all([
        db.Product.findOne(  {where:{id : id}}),
        db.ProductInventory.update( {quantity:count},{
          where: { productId: id },
        }),
      ]);
      const link = await db.Product.findOne( {where:{id :id},  attributes: ['link']})

      
      return res.status(200).json({link})

    } catch (err) {
        console.log(err)
    }
  }
 
}
