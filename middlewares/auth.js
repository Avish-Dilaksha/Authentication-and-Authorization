const jwt = require('jsonwebtoken')

const { UnAuthenticated } = require('../errors')

const authenticationMiddleware = async (req,res,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startswith(' Bearer ')) {
        throw new UnAuthenticated('No token provided')
    }
    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = {id, name}
        next()
    } catch (error) {
        throw new UnAuthenticated('No authorization to access this route')
    }
}

module.exports = authenticationMiddleware