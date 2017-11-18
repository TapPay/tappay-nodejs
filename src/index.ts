// .d.ts files
import {InitialData} from 'config';

// .ts files
import config from './config'
import TapPayServices from './services/TapPayServices'
const SANDBOX = "https://sandbox.tappayapis.com";
const PROD = "https://prod.tappayapis.com";

const initialize = ({partner_key, env}: InitialData) => {
    config.partner_key = partner_key
    config.env = env
    config.base_url = (env === 'sandbox') ? SANDBOX : PROD
}

export default ():object => {
    return {
        initialize,
        payByPrime: TapPayServices().payByPrime,
        payByToken: TapPayServices().payByToken,
        refund: TapPayServices().refund,
        getRecords: TapPayServices().getRecords,
        getRecordHistory: TapPayServices().getRecordHistory,
    }
}