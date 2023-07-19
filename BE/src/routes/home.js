const express = require('express')
const router = express.Router()

const { getHomeSpecialties, getHomeDoctors } = require('../controller/homeController')

const home = (route) => {
    router.get('/specialties', getHomeSpecialties)
    router.get('/doctors', getHomeDoctors)
    return route.use('/home', router)
}

module.exports = home