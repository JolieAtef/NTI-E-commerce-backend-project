import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middlewares/ValidatorMiddleware";
import subCategoriesModel from "../../models/subcategoryModel";
import { Subcategory } from "../../interfaces/subcategory";

export const createCategoryValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('Category Name is Required')
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
    validatorMiddleware
]

export const updateCategoryValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('Category Name is Required')
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
    validatorMiddleware
]

export const getCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id'),
  validatorMiddleware
]

export const deleteCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id')
    .custom(async (val) => {
      const subcategories = await subCategoriesModel.find({ category: val });
      if (subcategories.length > 0) {
        // TODO: less performance
        // subcategories.map(async (subcategory: SubCategories) => {
        //   await subCategoriesModel.findByIdAndDelete(subcategory._id)
        // })

        // * bulkWrite more performance
        const bulkOption = subcategories.map((subcategory: Subcategory) => ({
          deleteOne: { filter: { _id: subcategory._id } }
        }))
        await subCategoriesModel.bulkWrite(bulkOption)
      }
      return true;// custom return true
     }),
      validatorMiddleware
]