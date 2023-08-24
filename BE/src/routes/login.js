const express = require('express')
const router = express.Router()

const {
    checkLogin,
    findEmail,
    sendVerify,
    findUserByUsername
} = require('../controller/loginController')

const {
    checkUsername,
    checkPassword
} = require('../middleware/account-action')

const login = (route) => {
    router.post('/checklogin', checkUsername, checkPassword, findUserByUsername, checkLogin)
    router.post('/findemail', checkUsername, findUserByUsername, findEmail)
    router.post('/sendverify', sendVerify)
    return route.use('/login', router)
}

module.exports = login