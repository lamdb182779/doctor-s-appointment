const express = require('express')
const { getHomePage } = require('../controller/homeController')
const { getInfoApp } = require('../controller/infoController')
const router = express.Router()

const route = (app) => {
    router.get('/home', getHomePage)

    router.get('/', getInfoApp)
    return app.use('/api', router)
}

module.exports = route

