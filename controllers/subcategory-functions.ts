import { Request ,Response ,NextFunction } from "express";
import AsyncHandler from "express-async-handler";
import subcategoryModel from "../models/subcategoryModel";
import { Subcategory } from "../interfaces/subcategory";
import ApiErrors from "../utils/ApiErrors";


export const createSubcategory= AsyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const subcategory:Subcategory=await subcategoryModel.create(req.body);
    res.status(201).json({data:subcategory});
});


export const getSubcategories= AsyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const subcategories=await subcategoryModel.find();
    res.status(200).json({data:subcategories});
});


export const getSubcategory= AsyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const subcategory=await subcategoryModel.findById(req.params.id);
    if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
    res.status(200).json({data:subcategory});
});


export const updaetSubcategory= AsyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const subcategory=await subcategoryModel.findByIdAndUpdate(req.params.id,req.body, {new:true});
    if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
    res.status(200).json({data:subcategory});
});


export const deleteSubcategory= AsyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const subcategory=await subcategoryModel.findByIdAndDelete(req.params.id);
    if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
    res.status(204).json({data:subcategory});
});