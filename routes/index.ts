import { Application, Request, Response, NextFunction } from "express";
import categoryRoute from "./categoryRoutes";
import subcategoryRoute from "./subcategoryRoutes";


const mountRoutes = (app: Application): void => {
  app.use('/api/v1/category', categoryRoute);
  app.use('/api/v1/subcategory', subcategoryRoute);
}

export default mountRoutes;