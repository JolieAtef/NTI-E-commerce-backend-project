import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mountRoutes from './routes';

import { createCategory } from "./controllers/category-functions";
const app: express.Application=express()
dotenv.config()
app.use(express.json())

mountRoutes(app);

mongoose.connect(process.env.DB!).then(()=>{
    console.log(`Database connected to ${process.env.DB} `);
}).catch((err:Error)=>{
console.log(err);
})

app.listen(process.env.port ,()=> {
    console.log(`listen on port ${process.env.port}`)
})