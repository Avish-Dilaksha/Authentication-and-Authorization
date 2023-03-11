const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { BadRequest, NotFound, UnAuthenticated } =  require('../errors')

const User = require('../models/user')

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({})
        res.status(StatusCodes.OK).json({users, len: users.length})
    } catch (error) {
        throw new Error('Something went wrong Please try again later', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const signUp = async (req, res, next) => {
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        throw new BadRequest('Please provide name, email, password')
    }
    const user = await User.create({...req.body})

    const token = jwt.sign({name}, process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(StatusCodes.OK).json({msg: 'User created', user: user.name, token})
}

const login = async (req, res) => {
    const { name, email, password } = req.body

    if(!email || !password) {
        throw new BadRequest('Please provide email and password')
    }

    const user = User.findOne({email})

    if(!user) {
        throw new NotFound('user not found')
    }
    //compare password
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) {
        throw new UnAuthenticated('Invalid Credentials')
    }

    const token = jwt.sign({name}, process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(StatusCodes.OK).json({user: user.name, token})
}

module.exports = {
    getAllUsers,
    signUp,
    login
}