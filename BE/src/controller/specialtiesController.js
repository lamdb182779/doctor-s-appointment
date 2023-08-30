const db = require("../models")
const { Buffer } = require("buffer")

const toImage = (image) => {
    if (image) {
        const imgBuffer = Buffer.from(image).toString("binary")
        return `specialties:image/png;base64,${imgBuffer}`
    }
    return ""
}

const getSpecialties = async (req, res, next) => {
    let { limit, offset } = req.query
    limit = parseInt(limit)
    offset = parseInt(offset)
    limit = limit && limit > 0 ? limit : 4
    offset = offset && offset > 0 ? offset : 0
    try {
        let specialties = await db.Specialties.findAll({
            limit: limit,
            offset: offset
        })
        specialties = specialties.map((item) => {
            if (item.image) {
                item.image = toImage(item.image)
            }
            return item
        })
        return res.status(200).json({
            message: "ok",
            data: specialties
        })
    } catch (error) {
        console.log("Cannot get specialties. Error:", error)
        return res.status(500).json({
            message: "Server error!"
        })
    }
}

module.exports = {
    getSpecialties,
}