import mongoose, {Schema} from "mongoose";

const MarketDataSchema = new Schema({

    coinId:{
        type: String,
        required: true,
        lowercase: true
    },
    price:{
        type: Number,
    },
    marketCap:{
        type: Number,
    },
    priceChange24h:{
        type: Number,
    },

},{timestamps: true});  

const MarketData = mongoose.model('MarketData', MarketDataSchema);

export {MarketData};