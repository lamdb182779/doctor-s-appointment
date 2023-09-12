const db = require("../models")
const { Buffer } = require("buffer")
const { sequelize } = require("../config/connect")

// const toImage = (image) => {
//     if (image) {
//         const imgBuffer = Buffer.from(image).toString("binary")
//         return `data:image/png;base64,${imgBuffer}`
//     }
//     return ""
// }

const getHomeSpecialties = async (req, res, next) => {
    try {
        let specialties = await db.Specialties.findAll({
            order: sequelize.random(),
            limit: 5,
            attributes: ["id", "name", "image", "description"]
        })
        return res.status(200).json({
            message: "ok",
            data: specialties
        })
    } catch (error) {
        console.log("Cannot get specialties. Error:", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

const getHomeDoctors = async (req, res, next) => {
    try {
        let doctors = await db.Doctors.findAll({
            where: {
                active: true
            },
            order: sequelize.random(),
            limit: 10,
            attributes: ["id", "name", "image"],
            include: [
                {
                    model: db.Specialties,
                    attributes: ["name"]
                }
            ]
        })
        return res.status(200).json({
            message: "ok",
            data: doctors
        })
    } catch (error) {
        console.log("Cannot get doctors. Error:", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

module.exports = {
    getHomeSpecialties,
    getHomeDoctors
}