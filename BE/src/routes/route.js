const express = require('express')
const { getInfoApp } = require('../controller/infoController')
const router = express.Router()
const home = require('./home')
const specialties = require('./specialties')
const doctors = require('./doctors')
const login = require('./login')
const search = require('./search')
const self = require('./self')
const staffs = require('./staffs')

const route = (app) => {
    specialties(router)
    doctors(router)
    home(router)
    login(router)
    search(router)
    self(router)
    staffs(router)
    router.get('/', getInfoApp)
    return app.use('/api', router)
}

module.exports = route

