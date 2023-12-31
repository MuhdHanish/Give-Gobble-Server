import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { signupStepOne } from "../../../../../app/usecases/restaurant/restaurantAuthentication/restaurantSignup/signupStepOne";
import { restaurantModel } from "../../../../../framework/database/models/restaurantModel";
import { restaurantRepository, restaurantRespositoryEmpl } from "../../../../../framework/repository/restaurantRepository";

const restaurantRepository = restaurantRespositoryEmpl(restaurantModel);
 
const stepOneController = async (req: Request, res: Response) => {
 try {
  const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
   
  const { email, username } = req.body;
  const { message,uId } = await signupStepOne(restaurantRepository)(username,email);
  if (uId) {
    return res.status(200).json({ uId });
  } else {
    return res.status(409).json({ message });
  }
 } catch (error) {
  return res.status(500).json({ message: "Internal server error" });
 }
};

export default stepOneController;