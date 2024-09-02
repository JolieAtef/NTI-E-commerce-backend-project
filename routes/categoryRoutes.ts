import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category-functions";
import { createCategoryValidator, deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from "../utils/validation/categoryValidator";
import subcategoryRoute from "./subcategoryRoutes";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";

const categoryRoute: Router = Router();
categoryRoute.use('/:categoryId/subcategories', subcategoryRoute);
// in post man we put id in place of (:categoryId) :means variable

categoryRoute.route('/')
  .get(getCategories)
  .post(protectRoutes, checkActive, allowedTo('manager', 'admin'), createCategoryValidator, createCategory);

categoryRoute.route('/:id')
  .get(getCategoryValidator,getCategory)
  .put(protectRoutes, checkActive, allowedTo('manager', 'admin'), updateCategoryValidator, updateCategory)
  .delete(protectRoutes, checkActive, allowedTo('manager', 'admin'), deleteCategoryValidator, deleteCategory);

export default categoryRoute;