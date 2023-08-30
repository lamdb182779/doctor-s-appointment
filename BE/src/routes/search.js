const express = require("express")
const router = express.Router()

const { getAllResult } = require("../controller/searchController")

const search = (route) => {
    router.get("/:search", getAllResult)
    return route.use("/search", router)
}

module.exports = search