import * as all_interfaces from "../interfaces"
import { Application, Request, Response, NextFunction } from "express";
import categoryRoute from "./categoryRoutes";
import subcategoryRoute from "./subcategoryRoutes";
import ApiErrors from "../utils/ApiErrors";
import globalErrors from "../middlewares/globalErrors";
import productsRoute from './productRoute';


const mountRoutes = (app: Application): void => {
  app.use('/api/v1/category', categoryRoute);
  app.use('/api/v1/subcategory', subcategoryRoute);
  app.use('/api/v1/product', productsRoute);

  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ApiErrors(`The router ${req.originalUrl} is not found`, 400))
  })
  app.use(globalErrors);
}

export default mountRoutes;