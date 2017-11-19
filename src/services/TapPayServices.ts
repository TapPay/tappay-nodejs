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
import axios, {AxiosError} from 'axios';

// .ts file
import config from '../config';

const makeRequest = (path: string, data: any, callback: (error: AxiosError, result: object) => void = null): Promise<any> => {
    axios.defaults.baseURL = config.base_url;
    axios.defaults.headers.post['x-api-key'] = config.partner_key;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    data['partner_key'] = config.partner_key

    if (callback !== null) {
        // callback style
        axios.post(path, data).then((response) => {
            callback(null, response.data)
        }).catch((error) => {
            callback(error, null)
        })
    } else {
        // promise style
        return axios.post(path, data).then(response => response.data).catch(error => error)
    }
}

export const payByPrime = (data: PayByPrimeRequest, callback?: (error: AxiosError, result: PayByPrimeResponse) => void): Promise<PayByPrimeResponse> => {
    return makeRequest('/tpc/payment/pay-by-prime', data, callback)
}

export const payByToken = (data: PayByTokenRequest, callback?: (error: AxiosError, result: PayByTokenResponse) => void): Promise<PayByTokenResponse> =>  {
    return makeRequest('/tpc/payment/pay-by-token', data, callback)
}

export const refund = (data: RefundRequest, callback?: (error: AxiosError, result: RefundResponse) => void): Promise<RefundResponse> =>  {
    return makeRequest('/tpc/transaction/refund', data, callback)
}

export const getRecords = (data: GetRecordsRequest, callback?: (error: AxiosError, result: GetRecordsResponse) => void): Promise<GetRecordsResponse> =>  {
    return makeRequest('/tpc/transaction/query', data, callback)
}

export const getRecordHistory = (data: GetRecordHistoryRequest, callback?: (error: AxiosError, result: GetRecordHistoryResponse) => void): Promise<GetRecordHistoryResponse> =>  {
    return makeRequest('/tpc/transaction/trade-history', data, callback)
}

export const capToday = (data: CapTodayRequest, callback?: (error: AxiosError, result: CapTodayResponse) => void): Promise<CapTodayResponse> =>  {
    return makeRequest('/tpc/transaction/cap', data, callback)
}

export const bindCard = (data: BindCardRequest, callback?: (error: AxiosError, result: BindCardResponse) => void): Promise<BindCardResponse> =>  {
    return makeRequest('/tpc/card/bind', data, callback)
}

export const removeCard = (data: RemoveCardRequest, callback?: (error: AxiosError, result: RemoveCardResponse) => void): Promise<RemoveCardResponse> =>  {
    return makeRequest('/tpc/card/remove', data, callback)
}