import {Router} from 'express';
import { getStats } from '../controllers/cryptoCurrency.controller.js';
import { getDeviation } from '../controllers/cryptoCurrency.controller.js';


const cryptoCurrencyRouter = Router();


cryptoCurrencyRouter.route('/stats').get(getStats)
cryptoCurrencyRouter.route('/deviation').get(getDeviation)


export {cryptoCurrencyRouter};

