const db = require('../models')

const getHomePage = async (req, res) => {
    try {
        let data = {}
        data.contact = await db.Admins.findOne({
            where: {
                id: '01'
            }
        })
        data.specialties = await db.Specialties.findAll()
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
    getHomePage,
}