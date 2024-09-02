import { Document } from "mongoose";
import { Users } from "./user";
import { Products } from "./product";

export interface Carts extends Document {
  cartItems: CartProducts[];
  totalPrice: number;
  totalPriceAfterDiscount: number | undefined;
  user: Users;
}

export interface CartProducts extends Document {
  product: Products;
  quantity: number;
  price: number;
}