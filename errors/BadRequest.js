const { CusomApiError } = require("./custom-api");
const statusCodes = require('http-status-codes')

class BadRequest extends CusomApiError {
    constructor(message) {
        super(message)
        this.statusCode = statusCodes.BadRequest
    }
}

module.exports = {
    BadRequest
}