const express = require('express')
const router = express.Router()

const { checkLogin, findEmail, sendVerify } = require('../controller/loginController')

const login = (route) => {
    router.post('/checklogin', checkLogin)
    router.post('/findEmail', findEmail)
    router.post('/sendverify', sendVerify)
    return route.use('/login', router)
}

module.exports = login