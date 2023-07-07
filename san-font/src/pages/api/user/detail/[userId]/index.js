import db from "../../../../../backend/models/index.js";



export default async function handler(req, res) {
   
  if (req.method == "GET") {
  
    const user = await db.User.findByPk(req.query.userId, {
      include: [
        {
          model: db.UserInformation,
          as: "userInformation",
        },
      ],
    });
    
    return res.status(200).json(user);
  }
}
