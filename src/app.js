import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    return res.json('Welcome to CryptoCurrency API');
});

import {cryptoCurrencyRouter} from './routes/cryptoCurrency.route.js';

app.use('/api',cryptoCurrencyRouter);

export {app};