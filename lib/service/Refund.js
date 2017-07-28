module.exports = (request) => {
    return {
        refund: (data, callback) => {
            return request.refund(data, callback)
        }
    }
}