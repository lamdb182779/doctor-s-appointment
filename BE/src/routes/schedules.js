const express = require('express')
const router = express.Router()

const { getSchedule } = require('../controller/schedulesController')

const schedules = (route) => {
    router.get('/', getSchedule)
    return route.use('/schedules', router)
}

module.exports = schedules