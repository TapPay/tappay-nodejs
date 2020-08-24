// .d.ts files
import {InitialData} from './types';

// .ts files
import config from './config'
import {
    payByPrime,
    payByToken,
    refund,
    getRecords,
    getRecordHistory,
    capToday,
    bindCard,
    removeCard
} from './services/TapPayServices'
const SANDBOX = "https://sandbox.tappaysdk.com";
const PROD = "https://prod.tappaysdk.com";

const initialize = ({partner_key, env}: InitialData) => {
    config.partner_key = partner_key
    config.env = env
    config.base_url = (env === 'sandbox') ? SANDBOX : PROD
}


export default {
    initialize,
    payByPrime,
    payByToken,
    refund,
    getRecords,
    getRecordHistory,
    capToday,
    bindCard,
    removeCard
}