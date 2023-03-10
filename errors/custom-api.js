class CusomApiError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = {
    CusomApiError
}