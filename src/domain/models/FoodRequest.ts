import mongoose from "mongoose";

export interface FoodRequest {
  _id?: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId;
  userRole?: string,
  title?: string;
  isAccepted?: boolean;
  status?: string;
  quantity?: number;
  time?: string;
  location?: string;
  image?: string
}