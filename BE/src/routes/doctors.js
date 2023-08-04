const express = require('express')
const router = express.Router()

const { getAllDoctors,
    getSpecialtiesName,
    getDoctorById,
    deleteDoctorById,
    updateDoctorById,
    addNewDoctor } = require('../controller/doctorsController')

const doctors = (route) => {
    router.get('/specialties', getSpecialtiesName)
    router.get('/', getAllDoctors)
    router.delete('/', deleteDoctorById)
    router.put('/', updateDoctorById)
    router.post('/', addNewDoctor)
    router.get('/:id/:time', getDoctorById)
    return route.use('/doctors', router)
}

module.exports = doctors