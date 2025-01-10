import mongoose, { model, Schema } from "mongoose";

const CryptoDataSchema = new Schema({
    coin:{
        type:String,
        required:true,
        lowercase:true,
        index:true,
        trim:true
    },
    price:Number,
    market_cap:Number,
    change_24h:Number
},{timestamps:true})

export const CryptoData = new model('CryptoData',CryptoDataSchema);