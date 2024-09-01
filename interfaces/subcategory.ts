import {Document, Schema} from "mongoose";
import { Category } from "./category";

export interface Subcategory extends Document{
    name: string;
    category: Schema.Types.ObjectId;
}