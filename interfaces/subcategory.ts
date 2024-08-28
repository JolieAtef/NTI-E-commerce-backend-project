import {Document, Schema} from "mongoose";

export interface Subcategory extends Document{
    name: string;
    category: Schema.Types.ObjectId;
}