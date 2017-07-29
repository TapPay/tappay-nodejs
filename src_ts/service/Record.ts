export default (request) => {
    return {
        getRecords: (data, callback) => {
            return request.getRecords(data, callback)
        }
    }
}