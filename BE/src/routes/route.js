const express = require('express')
const { getHomePage } = require('../controller/homeController')
const router = express.Router()

const route = (app) => {
    router.get('/', getHomePage)
    return app.use('/api', router)
}

module.exports = route

