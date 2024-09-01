import { FilterData } from "./filterdata";
declare module 'express' {
  interface Request {
    filterData?: FilterData
  }
}
