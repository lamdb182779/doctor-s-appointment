const db = require('../models')
const { Buffer } = require('buffer')
const { sequelize } = require('../config/connect')

const toImage = (image) => {
    if (image) {
        const imgBuffer = Buffer.from(image).toString('binary')
        return `data:image/png;base64,${imgBuffer}`
    }
    return ""
}

const getHomeSpecialties = async (req, res) => {
    try {
        let data = await db.Specialties.findAll({
            order: sequelize.random(),
            limit: 10,
            attributes: ['id', 'name', 'image']
        })
        data = data.map((item) => {
            item.image = toImage(item.image)
            return item
        })
        return res.status(200).json({
            message: 'ok',
            data: data
        })
    } catch (error) {
        console.log('Cannot get data. Error:', error)
        return res.status(500).json({
            message: 'Server error!'
        })
    }
}

const getHomeDoctors = async (req, res) => {
    try {
        let data = await db.Doctors.findAll({
            where: {
                active: true
            },
            order: sequelize.random(),
            limit: 10,
            attributes: ['id', 'name', 'image'],
            include: [
                {
                    model: db.Specialties,
                    attributes: ['name']
                }
            ]
        })
        data = data.map((item) => {
            item.image = toImage(item.image)
            return item
        })
        return res.status(200).json({
            message: 'ok',
            data: data
        })
    } catch (error) {
        console.log('Cannot get data. Error:', error)
        return res.status(500).json({
            message: 'Server error!'
        })
    }
}

module.exports = {
    getHomeSpecialties,
    getHomeDoctors
}