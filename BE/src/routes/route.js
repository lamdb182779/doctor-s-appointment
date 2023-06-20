const express = require('express')
const { getHomePage } = require('../controller/homeController')
const { getInfoApp } = require('../controller/infoController')
const { getSpecialties } = require('../controller/specialtiesController')
const router = express.Router()

const route = (app) => {
    router.get('/home', getHomePage)
    router.get('/specialties', getSpecialties)
    router.get('/', getInfoApp)
    return app.use('/api', router)
}

module.exports = route

