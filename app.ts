import express from "express";
import { Server } from 'http';
import dotenv from "dotenv";
import mountRoutes from './routes';
import Database from './config/Database';
import { createCategory } from "./controllers/category-functions";


const app: express.Application=express()
let server: Server;
dotenv.config()
app.use(express.json())
Database()
mountRoutes(app);



server=app.listen(process.env.port ,()=> {
    console.log(`listen on port ${process.env.port}`)
})
process.on('unhandledRejection', (err: Error) => {
    console.error(`unhandledRejection ${err.name} | ${err.message}`);
    server.close(() => {
      console.error('shutting the application down');
      process.exit(1);
    });
  });