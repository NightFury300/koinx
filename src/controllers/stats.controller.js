import { TARGET_COINS } from "../constants.js";
import { CryptoData } from "../models/CryptoData.model.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { std } from "mathjs";

const getCoinStats = asyncHandler(async (req,res) => {
    const {coin} = req.query;

    if(!coin)
        throw new APIError(400,"Please Provide Coin Parameter")
    if(!TARGET_COINS.includes(coin))
        throw new APIError(400,"Invalid Coin Provided")
    const latestCryptoData = await CryptoData.findOne({ coin:coin.toLowerCase() }).sort({ createdAt: -1 });

    if(!latestCryptoData)
        throw new APIError(400,"Failed to fetch Coin Stats")
    return res.status(200).json(new APIResponse(201,latestCryptoData,"Data Fetched Successfully."))
})

const getCoinDeviation = asyncHandler(async (req,res) => {
    const {coin} = req.query;

    if(!coin)
        throw new APIError(400,"Please Provide Coin Parameter")
    if(!TARGET_COINS.includes(coin))
        throw new APIError(400,"Invalid Coin Provided")
    const cryptoRecords = await CryptoData.find({coin:coin.toLowerCase()}).sort({createdAt: -1}).limit(100)

    if(!cryptoRecords)
        throw new APIError(400,"No Record Found")

    const prices = cryptoRecords.map(record => record.price)

    const standardDeviation = std(prices)
    return res.status(200).json(new APIResponse(201,standardDeviation,"Calculated Successfully"))
})

export {getCoinStats,getCoinDeviation}