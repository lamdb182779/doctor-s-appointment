const db = require('../models')

const getInfoApp = async (req, res, next) => {
    try {
        let info = await db.Admins.findByPk('01')
        return res.status(200).json({
            message: 'ok',
            data: [info]
        })
    } catch (error) {
        console.log('Cannot get info. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

module.exports = {
    getInfoApp,
}