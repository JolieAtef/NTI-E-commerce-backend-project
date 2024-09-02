import { Document } from "mongoose";
import { CartProducts } from "./cart";
import { Users } from "./user";

export interface Orders extends Document {
  cartItems: CartProducts;
  totalPrice: number;
  paymentMethod: Payment;
  deliveredAt: Date | number;
  isDelivered: boolean;
  paidAt: Date | number;
  isPaid: boolean;
  taxPrice: number;
  address: string;
  user: Users;
}

type Payment = 'cash' | 'card'