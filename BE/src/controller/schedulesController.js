const db = require('../models')
const { Op } = require('sequelize')

const getSchedule = async (req, res, next) => {
    let { doctorId, date } = req.query
    if ((!doctorId) || (!date)) {
        return res.status(500).json({
            message: 'missing required query',
        })
    }
    try {
        let data = await db.Schedules.findAll({
            where: {
                doctorId: doctorId,
                date: {
                    [Op.eq]: new Date(date)
                },
            }
        })
        return res.status(200).json({
            message: 'ok',
            data: data,
        })
    } catch (error) {
        console.log('Cannot get schedules. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

module.exports = {
    getSchedule
}