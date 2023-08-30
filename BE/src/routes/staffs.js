const express = require("express")
const router = express.Router()

const {
    findStaffById,
    checkDupEmail,
    getAllStaffs,
    getStaffById,
    deleteStaffById,
    updateStaffById,
    addNewStaff
} = require("../controller/staffsController")
const {
    deactivateAccount,
    createAccount
} = require("../middleware/account-action")
const { findDoctorById } = require("../controller/doctorsController")

const staffs = (route) => {
    router.get("/", getAllStaffs)
    router.delete("/:id/:time", findStaffById, deactivateAccount, deleteStaffById)
    router.put("/:id/:time", checkDupEmail, updateStaffById)
    router.post("/", checkDupEmail, addNewStaff, createAccount)
    router.get("/:id/:time", findDoctorById, getStaffById)
    return route.use("/staffs", router)
}

module.exports = staffs