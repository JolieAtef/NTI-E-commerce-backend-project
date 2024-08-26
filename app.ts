import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app: express.Application=express()
dotenv.config()
app.use(express.json())


mongoose.connect(process.env.DB!).then(()=>{
    console.log(`Database connected to ${process.env.DB} `);
}).catch((err:Error)=>{
console.log(err);
})

app.listen(process.env.port ,()=> {
    console.log(`listen on port ${process.env.port}`)
})