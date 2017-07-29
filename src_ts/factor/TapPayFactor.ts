import TapPayRequest from '../request/TapPayRequest'
import DirectPay from '../service/DirectPay'
import Refund from '../service/Refund'
import Record from '../service/Record'
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

export default (type) => {  
    if (type in FACTOR_TABLE) return FACTOR_TABLE[type](TapPayRequest)
    else throw new Error('TapPay factor type does\'t match')
}
