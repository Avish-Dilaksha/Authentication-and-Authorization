const { CusomApiError } = require("./custom-api");
const statusCodes = require('http-status-codes')

class UnAuthenticated extends CusomApiError {
    constructor(message) {
        super(message)
        this.statusCode = statusCodes.UNAUTHORIZED
    }
}

module.exports = {
    UnAuthenticated
}