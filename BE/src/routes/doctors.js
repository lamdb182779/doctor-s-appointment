const express = require('express')
const router = express.Router()

const {
    findDoctorById,
    checkDupEmail,
    getAllDoctors,
    getSpecialtiesName,
    getDoctorById,
    deleteDoctorById,
    updateDoctorById,
    addNewDoctor
} = require('../controller/doctorsController')

const {
    deactivateAccount,
    createAccount,
} = require('../middleware/account-action')

const doctors = (route) => {
    router.get('/specialties', getSpecialtiesName)
    router.get('/', getAllDoctors)
    router.delete('/:id/:time', findDoctorById, deactivateAccount, deleteDoctorById)
    router.put('/:id/:time', checkDupEmail, updateDoctorById)
    router.post('/', checkDupEmail, addNewDoctor, createAccount)
    router.get('/:id/:time', findDoctorById, getDoctorById)
    return route.use('/doctors', router)
}

module.exports = doctors