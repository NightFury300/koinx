import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
try{
const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);

console.log(`Connection Established Successfully At:${connectionInstance.connection.host}`);
}
catch(error){
console.error("Connection to DB failed",error);
process.exit(1);
}
}

export default connectDB;