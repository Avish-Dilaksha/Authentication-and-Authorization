const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserLogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        Maxkength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        Maxkength: 15,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Please provide valid email address',
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        Maxkength: 15
    },
})

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model("UsersList", UserLogSchema)