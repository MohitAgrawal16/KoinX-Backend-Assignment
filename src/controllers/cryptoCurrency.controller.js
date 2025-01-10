import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import { MarketData } from "../models/MarketData.model.js";

const getStats = asyncHandler(async (req, res, next) => {
     
    const coin= req.query.coin;
    
    const stats = await MarketData.aggregate([
        {
            $match: {coinId: coin}
        },
        {
            $sort: {createdAt: -1}
        },
        {
            $limit: 1
        },
        {
            $project: {
                price: 1,
                marketCap: 1,
                priceChange24h: 1,  
                _id: 0
            }
        }
    ])
    
    if(stats.length === 0){
        throw new ApiError(404, "Stats not found");
    }
    const data=stats[0];

    return res.status(200).json(new ApiResponse(200, data ,"stat found successfully"));
});


const getDeviation = asyncHandler(async (req, res, next) => {
     
    const coin= req.query.coin;
    
    const deviation = await MarketData.aggregate([
        {
            $match: {coinId: coin}
        },
        {
            $sort: {createdAt: -1}
        },
        {
            $limit: 100
        },
        {
            $project: {
                price: 1
            }
        },
        {
            $group: {
                _id: null,
                deviation: {$stdDevPop: "$price"}
            }
        }
    ])

    if(deviation.length === 0){
        throw new ApiError(404 ,"Deviation not found");
    }
    const data=deviation[0];

    return res.status(200).json(new ApiResponse(200, data ,"Deviation found successfully"));
});

export {getStats , getDeviation};

