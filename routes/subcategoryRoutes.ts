import { Router } from "express";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updateSubcategory, filterData} from "../controllers/subcategory-functions";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subcategoryValidator";

const subcategoryRoute: Router = Router({ mergeParams: true });

subcategoryRoute.route('/')
  .get(filterData, getSubcategories)
  .post(createSubcategoryValidator,createSubcategory);

subcategoryRoute.route('/:id')
  .get(getSubcategoryValidator,getSubcategory)
  .put(updateSubcategoryValidator, updateSubcategory)
  .delete(deleteSubcategoryValidator,deleteSubcategory);

export default subcategoryRoute;
