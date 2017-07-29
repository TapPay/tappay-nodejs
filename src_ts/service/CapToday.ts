export default (request) => {
    return {
        capToday: (data, callback) => {
            return request.capToday(data, callback)
        }
    }
}