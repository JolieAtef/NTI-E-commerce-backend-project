import { Router } from "express";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updateSubcategory, filterData} from "../controllers/subcategory-functions";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subcategoryValidator";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth-functions";
const subcategoryRoute: Router = Router({ mergeParams: true });

subcategoryRoute.route('/')
  .get(filterData, getSubcategories)
  .post(protectRoutes, checkActive, allowedTo('manager', 'admin'), createSubcategoryValidator, createSubcategory);

subcategoryRoute.route('/:id')
  .get(getSubcategoryValidator,getSubcategory)
  .put(protectRoutes, checkActive, allowedTo('manager', 'admin'), updateSubcategoryValidator, updateSubcategory)
  .delete(protectRoutes, checkActive, allowedTo('manager', 'admin'), deleteSubcategoryValidator, deleteSubcategory);

export default subcategoryRoute;
