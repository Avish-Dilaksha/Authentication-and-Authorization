const mongoose = require('mongoose')

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
        Maxkength: 15
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        Maxkength: 15
    },
})

module.exports = mongoose.model("UsersList", UserLogSchema)