import { userInfo } from "./user-inf.js";
import checkToken from "../../../backend/authentication/auth.authentication.js";

export default async function handler(req, res) {
  checkToken(req, res);
  if (req.method === "GET") {
    const data = await userInfo(req, res);
    return res.status(200).json(data);
  }
}
