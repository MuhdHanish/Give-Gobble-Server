import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ngoModel } from "../../../../framework/database/models/ngoModel";
import { ngoRepositroyEmpl } from "../../../../framework/repository/ngoRespository";
import { forgotNgoPassword } from "../../../../app/usecases/ngo/ngoAuthentication/forgotNgoPassword";

const ngoRepository = ngoRepositroyEmpl(ngoModel);
 
const forgotNgoPasswordController = async (req: Request, res: Response) => {
 try {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const { identifier } = req.body;
  const uId = await forgotNgoPassword(ngoRepository)(identifier);
  if (uId) {
    return res.status(200).json({ uId });
  } else {
   return res.status(401).json({ message: "No active account found with the given credentials" });
  } 
 } catch (error) {
  return res.status(500).json({ message: "Internal server error" });
 }
};

export default forgotNgoPasswordController;