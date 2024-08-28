import { Router } from "express";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updaetSubcategory} from "../controllers/subcategory-functions";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subcategoryValidator";

const subcategoryRoute: Router = Router({ mergeParams: true });

subcategoryRoute.route('/')
  .get(getSubcategories)
  .post(createSubcategoryValidator,createSubcategory);

subcategoryRoute.route('/:id')
  .get(getSubcategoryValidator,getSubcategory)
  .put(updateSubcategoryValidator, updaetSubcategory)
  .delete(deleteSubcategoryValidator,deleteSubcategory);

export default subcategoryRoute;
