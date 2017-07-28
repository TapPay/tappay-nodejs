import superagent  from 'superagent'
import configuration  from '../configuration.js'
const SANDBOX = 'https://sandbox.tappayapis.com'
const PROD = 'https://prod.tappayapis.com'

const request = (url, data, callback = null) => {

    // Put the api_key into body
    data['partnerkey'] = configuration.api_key

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': configuration.api_key
    }
    const desitination_url = configuration.environment === 'sandbox' ? SANDBOX : (configuration.environment === 'production' ? PROD : SANDBOX)
    const final_url = `${desitination_url}${url}`

    //  Support callback and Promise
    if (callback !== null && typeof callback === 'function') {
        superagent.post(final_url)
            .set(headers)
            .send(data)
            .end(callback)
    } else {
        return superagent.post(final_url)
            .set(headers)
            .send(data)
    }
}

const TapPayRequest = {}

TapPayRequest.payByPrime = (data, callback) => {
    return request('/tpc/partner/directpay/paybyprime', data, callback)   
}

TapPayRequest.payByApplePay = function (data, callback) {
    return request('/tpc/applepay/paymenttoken/pay', data, callback)   
}

TapPayRequest.payByAndroidPay = function (data, callback) {
    return request('/tpc/androidpay/paymenttoken/pay', data, callback)   
}

TapPayRequest.refund = function (data, callback) {
    return request('/tpc/partner/fastrefund', data, callback)
}

TapPayRequest.getRecords = function (data, callback) {
    return request('/tpc/partner/getrecordsplus', data, callback)
}

TapPayRequest.capTody = function (data, callback) {
    return request('/tpc/partner/captoday', data, callback)
}

module.exports = TapPayRequest