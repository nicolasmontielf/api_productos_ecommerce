const formatResponse = (status, data) => {
    return obj = {
        "status": status,
        "data":data
    }
}

module.exports = formatResponse;