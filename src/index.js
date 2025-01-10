import {connectDB} from "./db/db.js";
import dotenv from 'dotenv';
import {app} from './app.js';
import { MarketData } from "./models/MarketData.model.js";

dotenv.config({
    path:'./.env'
});


connectDB()
.then(() => {
   
    console.log("DB connected");
    
    app.on("error", (error) => {
        console.log("Express server error", error);
    });
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
 
    setInterval(() => {
        
        const queryParams='?vs_currency=usd&ids=bitcoin,matic-network,ethereum';
      //  console.log(`${process.env.CoinGecko_API_URL}${queryParams}`);
      
        fetch(`${process.env.CoinGecko_API_URL}${queryParams}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-cg-demo-api-key': `${process.env.CoinGecko_API_KEY}`
            }
        }).then((res) => res.json())
        .then((data) => {
            data.forEach((coin) => {
                 
                    MarketData.create({
                    coinId: coin.id,
                    price: coin.current_price,
                    marketCap: coin.market_cap,
                    priceChange24h: coin.price_change_24h
                });
               // console.log(coin);
            });
           // console.log(data);
        }).catch((error) => {
            console.log("API error", error);
        });


    },1000*60*60*2);

}).catch((error) => {
    console.log("DB connection error", error);
}); 