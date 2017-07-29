export default (request) => {
    return {
        refund: (data, callback) => {
            return request.refund(data, callback)
        }
    }
}