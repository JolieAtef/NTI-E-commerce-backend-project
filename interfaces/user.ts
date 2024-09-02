import { Document } from "mongoose";
import { Products } from "./product";
type Role = 'manager' | 'admin' | 'user'

export interface Users extends Document {
  email: string;
  password: string;
  name: string;
  image: string;
  role: Role;
  wishlist:Products[];
  active: boolean;
  passwordChangedAt: Date | number;
  //undefined for line 96,97,98 in controllers/auth-functions
  resetCode: string | undefined;
  resetCodeExpireTime: Date | number | undefined;
  resetCodeVerify: boolean | undefined;
}