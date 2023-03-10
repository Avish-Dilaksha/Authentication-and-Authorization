const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        trype: String,
        required: [true, 'Please provide User name'],
        minlength: 3,
        Maxkength: 50
    },
    email: {
        trype: String,
        required: [true, 'Please provide Email'],
        minlength: 3,
        Maxkength: 15
    },
    password: {
        trype: String,
        required: [true, 'Please provide Password'],
        minlength: 3,
        Maxkength: 15
    },
})

module.exports = mongoose.model("Users", UserSchema)