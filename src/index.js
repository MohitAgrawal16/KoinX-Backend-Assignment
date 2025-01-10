import {connectDB} from "./db/db.js";
import dotenv from 'dotenv';
import {app} from './app.js';

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

    
}).catch((error) => {
    console.log("DB connection error", error);
}); 