const db = require('../models')
const { Op } = require('sequelize')

const toImage = (image) => {
    if (image) {
        const imgBuffer = Buffer.from(image).toString('binary')
        return `data:image/jpg;base64,${imgBuffer}`
    }
    return ""
}

let getAllDoctors = async (req, res) => {
    let { page, pagesize, name, specialtyID, clinicAddress } = req.query

    pagesize = parseInt(pagesize)

    pagesize = !pagesize ? 5 : pagesize

    pagesize = pagesize > 20 ? 20 : pagesize

    page = !page ? 1 : page
    try {
        let count = await db.Doctors.count()
        if (page > (count - 1) / pagesize + 1) {
            page = parseInt((count - 1) / pagesize + 1)
        }
    } catch (err) {
        console.log('Cannot count. Error: ', err)
        return res.status(500).json({
            message: 'server error',
        })
    }
    page = page === 0 ? 1 : page
    let skip = (page - 1) * pagesize

    //Structure data need to find
    let find = { active: true };
    if (name) {
        find.name = {
            [Op.substring]: name
        }
    }
    if (specialtyID) {
        find.specialtyID = specialtyID
    }
    if (clinicAddress) {
        find.clinicAddress = {
            [Op.substring]: clinicAddress
        }
    }

    //
    try {
        let data = await db.Doctors.findAll({
            where: find,
            offset: skip,
            limit: pagesize,
            attributes: ['id', 'name', 'clinicAddress', 'email', 'phoneNumber', 'describe', 'image']
        })

        data = data.map((item) => {
            item.image = toImage(item.image)
            return item
        })

        return res.status(200).json({
            message: 'ok',
            data: data
        })
    } catch (err) {
        console.log('Cannot get data. Error:', err)
        return res.status(500).json({
            message: 'server error',
        })
    }
}

let getDoctorById = async (req, res) => {
    let id = req.params.id
    try {
        let count = await db.Doctors.count()
        if (id > count || id <= 0) {
            return res.status(404).json({
                message: 'data not found',
            })
        }
    } catch (err) {
        console.log('Cannot count. Error: ', err)
        return res.status(500).json({
            message: 'server error',
        })
    }
    if (!id) {
        return res.status(400).json({
            message: 'missing required param'
        })
    }
    try {
        let data = await db.Doctors.findAll({
            where: {
                id: id,
            }
        })
        data = data.map((item) => {
            item.image = toImage(item.image)
            return item
        })
        return res.status(200).json({
            message: 'ok',
            data: data
        })
    } catch (err) {
        console.log('Cannot get data. Error:', err)
        return res.status(500).json({
            message: 'server error',
        })
    }
}

let getSpecialtiesName = async (req, res) => {
    try {
        let data = await db.Specialties.findAll({
            attributes: ['id', 'name']
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
    getAllDoctors,
    getSpecialtiesName,
    getDoctorById,
}