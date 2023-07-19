const express = require('express')
const { getInfoApp } = require('../controller/infoController')
const router = express.Router()
const home = require('./home')
const specialties = require('./specialties')
const doctors = require('./doctors')
const login = require('./login')

const route = (app) => {
    specialties(router)
    doctors(router)
    home(router)
    login(router)
    router.get('/', getInfoApp)
    return app.use('/api', router)
}

module.exports = route

