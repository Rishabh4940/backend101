require('dotenv').config({path:'.env'})
import mongoose from "mongoose";
import {DB_NAME} from "./constants"
import connectDB from "./db/indexdb.js";




connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.Console.log(`running at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("connection failed",err)
})
