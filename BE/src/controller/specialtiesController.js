const db = require('../models')

const getSpecialties = async (req, res) => {
    try {
        let data = await db.Specialties.findAll()
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
    getSpecialties,
}