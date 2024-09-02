import { Document } from "mongoose";
import { Users } from "./user";
import { Products } from "./product";

export interface Reviews extends Document {
  comment: string;
  rating: number;
  user: Users;
  product: Products;
};