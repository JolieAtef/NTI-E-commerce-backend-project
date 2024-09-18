import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct ,  resizeImages,  uploadProductImages} from "../controllers/product-functions";
import { createProductValidator, deleteProductValidator, getProductValidator, updateProductValidator } from "../utils/validation/productValidator";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth-functions";
import reviewsRoute from "./reviewRoutes";

const productsRoute: Router = Router();
productsRoute.use('/:productId/reviews', reviewsRoute);

productsRoute.route('/')
  .get(getProducts)
  //.post(upload.single('cover'),createProductValidator, createProduct);
  .post(protectRoutes, checkActive, allowedTo('manager', 'admin'), uploadProductImages, resizeImages, createProductValidator, createProduct);
 
productsRoute.route('/:id')
  .get(getProductValidator, getProduct)
  .put(protectRoutes, checkActive, allowedTo('manager', 'admin'), updateProductValidator, updateProduct)
  .delete(protectRoutes, checkActive, allowedTo('manager', 'admin'), deleteProductValidator, deleteProduct);

export default productsRoute;