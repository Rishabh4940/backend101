require('dotenv').config({path:'./.env'})
//import dotenv from "dotenv"
import connectDB from "./db/indexdb.js";
import {app} from './app.js'
//dotenv.config({
//    path:'./.env'})


connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        Console.log(`running at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("connection failed",err)
})
