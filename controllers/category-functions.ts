import categoriesModel from "../models/categoryModel";
import { Category } from "../interfaces/category";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";

export const createCategory = createOne<Category>(categoriesModel)
export const getCategories = getAll<Category>(categoriesModel, 'categories')
export const getCategory = getOne<Category>(categoriesModel)
export const updateCategory = updateOne<Category>(categoriesModel)
export const deleteCategory = deleteOne<Category>(categoriesModel)