module.exports = (request) => {
    return {
        payByPrime: (data, callback) => {
            return request.payByPrime(data, callback)
        }
    }
}