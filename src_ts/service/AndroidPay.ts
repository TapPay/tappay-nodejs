export default (request) => {
    return {
        pay: (data, callback) => {
            return request.payByAndroidPay(data, callback)
        }
    }
}