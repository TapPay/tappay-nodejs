/// <reference path="../index.d.ts"/>

import configuration from '../configuration'
import TapPayFactor from '../factor/TapPayFactor.js'

const initialize = (data: InitialData): void => {
    if (data.environment !== 'sandbox' && data.environment !== 'production') {
        throw new Error('Enviroment does\'t match')
    }
    configuration.api_key =  data.api_key
    configuration.environment =  data.environment
}

export default (): object => {
    return {
        initialize: initialize,
        refund: TapPayFactor('Refund').refund,
        getRecords: TapPayFactor('Record').getRecords,
        capToday: TapPayFactor('CapToday').capToday,
        DirectPay: TapPayFactor('DirectPay'),
        ApplePay: TapPayFactor('ApplePay'),
        AndroidPay: TapPayFactor('AndroidPay')
    }
}