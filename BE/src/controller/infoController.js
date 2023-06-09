const db = require('../models')

const getInfoApp = async (req, res) => {
    try {
        let data = await db.Admins.findAll({
            where: {
                id: '01'
            }
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
    getInfoApp,
}