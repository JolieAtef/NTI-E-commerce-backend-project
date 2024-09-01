import { Request ,Response ,NextFunction } from "express";
import subcategoryModel from "../models/subcategoryModel";
import { Subcategory } from "../interfaces/subcategory";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";
import { FilterData } from "../interfaces/filterdata";


export const filterData = (req:Request , res: Response, next: NextFunction) => {
  let filterData: FilterData = {};
  if (req.params.categoryId) { filterData.category = req.params.categoryId };
  req.filterData = filterData;
  next();
}

export const createSubcategory = createOne<Subcategory>(subcategoryModel)
export const getSubcategories = getAll<Subcategory>(subcategoryModel, 'subcategories')
export const getSubcategory = getOne<Subcategory>(subcategoryModel)
export const updateSubcategory = updateOne<Subcategory>(subcategoryModel)
export const deleteSubcategory = deleteOne<Subcategory>(subcategoryModel)


