import mongoose from "mongoose";

export interface Restaurant {
  _id?: mongoose.Types.ObjectId;
  username?: string;
  email?: string;
  password?: string;
  location?: string;
  role?:string,
  status?: boolean;
  profile?: string;
}
