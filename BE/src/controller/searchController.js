const db = require('../models')
const { Op } = require('sequelize')

const toImage = (item) => {
    if (item.image) {
        const imgBuffer = Buffer.from(item.image).toString('binary')
        return item.table === 'Doctors' ? `data:image/jpg;base64,${imgBuffer}` : `data:image/png;base64,${imgBuffer}`
    }
    return ""
}

const getAllResult = async (req, res, next) => {
    let search = req.params.search
    search = search.split(' ')
    let findSpecialties = []
    search.map((item) => {
        if (item !== '') {
            findSpecialties.push({ name: { [Op.substring]: item } })
            findSpecialties.push({ description: { [Op.substring]: item } })
        }
    })
    let findDoctors = []
    search.map((item) => {
        if (item !== '') {
            findDoctors.push({ name: { [Op.substring]: item } })
            findDoctors.push({ clinicAddress: { [Op.substring]: item } })
        }
    })
    try {
        let specialties = await db.Specialties.findAll({
            where: {
                [Op.or]: findSpecialties
            },
            attributes: ['id', 'name', 'image', 'table'],
        })
        let { count, rows: doctors } = await db.Doctors.findAndCountAll({
            where: {
                [Op.or]: findDoctors,
                active: true,
            },
            attributes: ['id', 'name', 'clinicAddress', 'image', 'table'],
            include: [
                {
                    model: db.Specialties,
                    attributes: ['name']
                }
            ]
        })
        doctors = doctors.map((item) => {
            item.clinicAddress = item.clinicAddress.replace(/\*\*.*?\*\*/g, '').trim()
            return item
        })
        let data = ['Chuyên khoa', ...specialties, 'Bác sĩ', ...doctors, count]
        data = data.map((item) => {
            if (item.image)
                item.image = toImage(item)
            return item
        })
        return res.status(200).json({
            message: 'ok',
            data: data
        })
    } catch (error) {
        console.log('Cannot get data. Error: ', error)
        return res.status(500).json({
            message: 'server error',
        })
    }
}

module.exports = {
    getAllResult,
}