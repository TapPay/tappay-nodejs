import TapPayRequest from '../request/TapPayRequest.js'
import DirectPay from '../service/DirectPay.js'
import Refund from '../service/Refund.js'
import Record from '../service/Record.js'
import CapToday from '../service/CapToday'
import ApplePay from '../service/ApplePay'
import AndroidPay from '../service/AndroidPay'

const FACTOR_TABLE = {
    'DirectPay': DirectPay,
    'Refund': Refund,
    'Record': Record,
    'CapToday': CapToday,
    'ApplePay': ApplePay,
    'AndroidPay': AndroidPay
}

module.exports = (type) => {  
    // Inject request into factor
    if (type in FACTOR_TABLE) return FACTOR_TABLE[type](TapPayRequest)
    else throw new Error('TapPay factor type does\'t match')
}
