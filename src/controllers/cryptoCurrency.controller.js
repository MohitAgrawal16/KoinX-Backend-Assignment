import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import { MarketData } from "../models/MarketData.model.js";

const getStats = asyncHandler(async (req, res, next) => {
     
    const coin= req.params.coin;
    
    const stats = await MarketData.find(
        {coinId: coin}
    ).sort({createdAt: -1}).limit(1);

    if(!stats){
        return next(new ApiError("Stats not found", 404));
    }

    res.status(200).json(new ApiResponse(200, stats));
});


const getDeviation = asyncHandler(async (req, res, next) => {
     
    const coin= req.params.coin;
    
    const stats = await MarketData.aggregate([
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
            // standard deviation
            $group: {
                _id: null,
                deviation: {$stdDevPop: "$price"}
            }
        }
    ])

    if(!stats){
        return next(new ApiError("Stats not found", 404));
    }

    res.status(200).json(new ApiResponse(200, stats));
});

export {getStats , getDeviation};

