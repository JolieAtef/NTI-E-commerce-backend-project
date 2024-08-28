import { Router } from "express";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updaetSubcategory} from "../controllers/subcategory-functions";


const subcategoryRoute: Router = Router();

subcategoryRoute.route('/')
  .get(getSubcategories)
  .post(createSubcategory);

subcategoryRoute.route('/:id')
  .get(getSubcategory)
  .put( updaetSubcategory)
  .delete(deleteSubcategory);

export default subcategoryRoute;
