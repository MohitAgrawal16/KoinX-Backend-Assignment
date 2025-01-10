import express from 'express';

const app = express();

app.use(express.json());


import {cryptoCurrencyRouter} from './routes/CryptoCurrency.route.js';

app.use('/api',cryptoCurrencyRouter);

export {app};