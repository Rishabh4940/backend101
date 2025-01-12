import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"

const connectDB =async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.log("err",error);
        process.exit(1);
    }
}

export default connectDB;