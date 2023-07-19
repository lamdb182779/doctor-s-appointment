const express = require('express')
const router = express.Router()

const { getAllDoctors, getSpecialtiesName, getDoctorById } = require('../controller/doctorsController')

const doctors = (route) => {
    router.get('/specialties', getSpecialtiesName)
    router.get('/', getAllDoctors)
    router.get('/:id', getDoctorById)
    return route.use('/doctors', router)
}

module.exports = doctors