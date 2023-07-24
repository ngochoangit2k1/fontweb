import checkToken from "../../../../backend/authentication/auth.authentication.js";
import { updateUserProfile } from "./updateUserProfile.js";
import { updateUserProfileValidator } from "../../../../backend/validator/user.validator.js";

import { NextResponse } from "next/server";

export default async function handler(req, res) {
  checkToken(req, res);

  if (req.method === "PUT") {
    await updateUserProfileValidator(req.body, res);

    return updateUserProfile(req, res)
      .then((t) => NextResponse.json(t))
      .catch(NextResponse.next);
  }
}
