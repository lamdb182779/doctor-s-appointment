const express = require("express")
const router = express.Router()

const {
    changePw,
    getInfo,
    getQI
} = require("../controller/selfController")

const self = (route) => {
    router.post("/changepw", changePw)
    router.get("/", getQI)
    router.get("/info", getInfo)
    return route.use("/self", router)
}

module.exports = self