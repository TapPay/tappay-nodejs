module.exports = (request) => {
    return {
        pay: (data, callback) => {
            return request.payByApplePay(data, callback)
        }
    }
}