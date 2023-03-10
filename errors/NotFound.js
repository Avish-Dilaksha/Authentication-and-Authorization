const { CusomApiError } = require("./custom-api");
const statusCodes = require('http-status-codes')

class NotFound extends CusomApiError {
    constructor(message) {
        super(message)
        this.statusCode = statusCodes.NotFound
    }
}

module.exports = {
    NotFound
}