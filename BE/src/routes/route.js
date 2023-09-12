const express = require("express")

const router = express.Router()
const { getInfoApp } = require("../controller/infoController")
const home = require("./home")
const specialties = require("./specialties")
const doctors = require("./doctors")
const login = require("./login")
const search = require("./search")
const self = require("./self")
const staffs = require("./staffs")
const schedules = require("./schedules")
const appointments = require("./appointments")
const { checkToken, checkUserPermission } = require("../middleware/permission-action")

const route = (app) => {
    router.all("*", checkToken, checkUserPermission)
    specialties(router)
    doctors(router)
    home(router)
    login(router)
    search(router)
    self(router)
    staffs(router)
    schedules(router)
    appointments(router)
    router.get("/deletetoken", (req, res, next) => {
        res.clearCookie("token")
        return res.status(200).json({
            message: "ok"
        })
    })
    router.get("/checktoken", (req, res, next) => {
        let cookies = req.cookies
        if (cookies?.token) {
            return res.status(200).json({
                message: "token exist"
            })
        } else {
            return res.status(200).json({
                message: "no token"
            })
        }
    })
    router.get("/", getInfoApp)
    return app.use("/api", router)
}

module.exports = route

