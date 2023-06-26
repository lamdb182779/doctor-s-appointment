const express = require('express')
const { getHomePage } = require('../controller/homeController')
const { getInfoApp } = require('../controller/infoController')
const { getSpecialties } = require('../controller/specialtiesController')
const { getAllDoctors, getSpecialtiesName } = require('../controller/doctorsController')
const router = express.Router()

const route = (app) => {
    router.get('/home', getHomePage)

    router.get('/specialties', getSpecialties)

    router.get('/doctors/specialties', getSpecialtiesName)
    router.get('/doctors', getAllDoctors)

    router.get('/', getInfoApp)
    return app.use('/api', router)
}

module.exports = route

