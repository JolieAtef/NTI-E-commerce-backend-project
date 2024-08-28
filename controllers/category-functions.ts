import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import categoryModel from "../models/categoryModel";
import  {Category}  from "../interfaces/category";
import ApiErrors from "../utils/ApiErrors";

export const createCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category: Category = await categoryModel.create(req.body);
  res.status(201).json({ data: category});
});

//get all categories so use find() wwithout id
export const getCategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const categories = await categoryModel.find();
  res.status(200).json({ data: categories});
});

export const getCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category = await categoryModel.findById(req.params.id);
  if (!category) { return next(new ApiErrors('Category Not Found', 404)) };
  res.status(200).json({ data: category})
});

export const updateCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category = await categoryModel.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
  if (!category) { return next(new ApiErrors('Category Not Found', 404)) };
  res.status(200).json({ data: category});
});

export const deleteCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category = await categoryModel.findByIdAndDelete(req.params.id);
  if (!category) { return next(new ApiErrors('Category Not Found', 404)) };
  res.status(204).json();
});