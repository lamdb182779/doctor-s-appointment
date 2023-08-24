const express = require('express')
const router = express.Router()

const {
    changePw,
    getInfo
} = require('../controller/selfController')

const self = (route) => {
    router.post('/changepw', changePw)
    router.get('/', getInfo)
    return route.use('/self', router)
}

module.exports = self