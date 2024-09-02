import { FilterData } from "./filterdata";
import { Users } from "./user";

declare module 'express' {
  interface Request {
    filterData?: FilterData;
    files?: any;
    user?: Users;
  
  }
}
