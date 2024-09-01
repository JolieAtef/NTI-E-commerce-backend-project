import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category-functions";
import { createCategoryValidator, deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from "../utils/validation/categoryValidator";
import subcategoryRoute from "./subcategoryRoutes";


const categoryRoute: Router = Router();
categoryRoute.use('/:categoryId/subcategories', subcategoryRoute);
// in post man we put id in place of (:categoryId) :means variable

categoryRoute.route('/')
  .get(getCategories)
  .post(createCategoryValidator,createCategory);

categoryRoute.route('/:id')
  .get(getCategoryValidator,getCategory)
  .put(updateCategoryValidator,updateCategory)
  .delete( deleteCategoryValidator,deleteCategory);

export default categoryRoute;