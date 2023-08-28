const express = require('express')
const router = express.Router()

const {
    addNewAppointment,
    getAllAppointments
} = require('../controller/appointmentsController')

const home = (route) => {
    router.post('/', addNewAppointment)
    router.get('/', getAllAppointments)
    return route.use('/appointments', router)
}

module.exports = home