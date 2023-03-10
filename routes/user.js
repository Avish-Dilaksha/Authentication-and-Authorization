const express = require('express')
const router = express.Router()

const { getAllUsers, signUp, login } = require('../controllers/user')

router.route('/').get(getAllUsers)
router.route('/signup').post(signUp)
router.route('/login').post(login)


module.exports = router