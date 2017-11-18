// modules
import axios from 'axios';

// .ts file
import config from '../config';

const makeRequest = (path: string, data: any, callback: any = null) => {
    axios.defaults.baseURL = config.base_url;
    axios.defaults.headers.post['x-api-key'] = config.partner_key;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    data['partner_key'] = config.partner_key

    // callback style
    if (callback !== null) {
        return axios.post(path, data).then((response) => {
            callback(null, response.data)
        }).catch((error) => {
            callback(error, null)
        })
    }

    // promise style
    return axios.post(path, data).then(response => response.data).catch(error => error)
}

const payByPrime = (data: object, callback: any): Promise<any> | void =>  {
    return makeRequest('/tpc/payment/pay-by-prime', data)
}

const payByToken = (data: object, callback: any): Promise<any> | void =>  {
    return makeRequest('/tpc/payment/pay-by-token', data)
}

const refund = (data: object, callback: any): Promise<any> | void =>  {
    return makeRequest('/tpc/transaction/refund', data)
}

const getRecords = (data: object, callback: any): Promise<any> | void =>  {
    return makeRequest('/tpc/transaction/query', data)
}

const getRecordHistory = (data: object, callback: any): Promise<any> | void =>  {
    return makeRequest('/tpc/transaction/trade-history', data)
}

export default () => {
    return {
        payByPrime,
        payByToken,
        refund,
        getRecords,
        getRecordHistory
    }
}