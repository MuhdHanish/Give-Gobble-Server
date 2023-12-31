import mongoose from "mongoose";

export interface User {
  _id?: mongoose.Types.ObjectId;
  username?: string;
  email?: string;
  password?: string;
  location?: string,
  role?:string,
  status?: boolean;
  profile?: string;
}
