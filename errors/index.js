const { CusomApiError } = require("./custom-api");
const { BadRequest } = require('./BadRequest')
const { NotFound } = require('./NotFound')
const { UnAuthenticated } = require('./UnAuthenticated')

module.exports = {
    CusomApiError,
    BadRequest,
    NotFound,
    UnAuthenticated,
}