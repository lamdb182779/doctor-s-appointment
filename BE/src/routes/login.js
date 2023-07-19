const express = require('express')
const router = express.Router()

const { checkLogin } = require('../controller/loginController')

const login = (route) => {
    router.post('/checklogin', checkLogin)
    return route.use('/login', router)
}

module.exports = login