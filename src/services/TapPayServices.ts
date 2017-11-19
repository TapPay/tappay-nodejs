// .d.ts file
import {
    PayByPrimeRequest,
    PayByPrimeResponse,
    PayByTokenRequest,
    PayByTokenResponse,
    GetRecordsRequest,
    GetRecordsResponse,
    GetRecordHistoryRequest,
    GetRecordHistoryResponse,
    RefundRequest,
    RefundResponse,
    CapTodayRequest,
    CapTodayResponse,
    BindCardRequest,
    BindCardResponse,
    RemoveCardRequest,
    RemoveCardResponse,
} from 'TapPayServices'

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

export const payByPrime = (data: PayByPrimeRequest, callback: any): Promise<PayByPrimeResponse> | void =>  {
    return makeRequest('/tpc/payment/pay-by-prime', data)
}

export const payByToken = (data: PayByTokenRequest, callback: any): Promise<PayByTokenResponse> | void =>  {
    return makeRequest('/tpc/payment/pay-by-token', data)
}

export const refund = (data: RefundRequest, callback: any): Promise<RefundResponse> | void =>  {
    return makeRequest('/tpc/transaction/refund', data)
}

export const getRecords = (data: GetRecordsRequest, callback: any): Promise<GetRecordsResponse> | void =>  {
    return makeRequest('/tpc/transaction/query', data)
}

export const getRecordHistory = (data: GetRecordHistoryRequest, callback: any): Promise<GetRecordHistoryResponse> | void =>  {
    return makeRequest('/tpc/transaction/trade-history', data)
}

export const capToday = (data: CapTodayRequest, callback: any): Promise<CapTodayResponse> | void =>  {
    return makeRequest('/tpc/transaction/cap', data)
}

export const bindCard = (data: BindCardRequest, callback: any): Promise<BindCardResponse> | void =>  {
    return makeRequest('/tpc/card/bind', data)
}

export const removeCard = (data: RemoveCardRequest, callback: any): Promise<RemoveCardResponse> | void =>  {
    return makeRequest('/tpc/card/remove', data)
}