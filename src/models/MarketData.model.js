import mongoose, {Schema} from "mongoose";

const MarketDataSchema = new Schema({

    coinType:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    marketCap:{
        type: Number,
        required: true
    },
    change24h:{
        type: Number,
        required: true
    },

},{timestamps: true});  

const MarketData = mongoose.model('MarketData', MarketDataSchema);

export {MarketData};