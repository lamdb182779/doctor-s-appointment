const express = require('express')
const router = express.Router()

const { getAllStaffs,
    getStaffById,
    deleteStaffById,
    updateStaffById,
    addNewStaff } = require('../controller/staffsController')

const staffs = (route) => {
    router.get('/', getAllStaffs)
    router.delete('/', deleteStaffById)
    router.put('/', updateStaffById)
    router.post('/', addNewStaff)
    router.get('/:id/:time', getStaffById)
    return route.use('/staffs', router)
}

module.exports = staffs