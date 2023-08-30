const express = require("express")
const router = express.Router()

const { getSpecialties } = require("../controller/specialtiesController")

const specialties = (route) => {
    router.get("/", getSpecialties)
    return route.use("/specialties", router)
}

module.exports = specialties