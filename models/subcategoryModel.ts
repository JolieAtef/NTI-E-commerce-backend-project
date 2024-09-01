import { Schema, model } from "mongoose";
import { Subcategory } from "../interfaces/subcategory";

const subCategorySchema: Schema = new Schema<Subcategory>(
    {name: { type: String, required: true, trim: true, unique: true },
     category: { type: Schema.Types.ObjectId, required: true , ref: 'categories'}}, 
    { timestamps: true }
);

subCategorySchema.pre<Subcategory>(/^find/, function (next) {
    // can select only name   select'name -_id'
    this.populate({ path: 'category', select: 'name' }) 
    next()
  })

export default model<Subcategory>('subCategories', subCategorySchema)