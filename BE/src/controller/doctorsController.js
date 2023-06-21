const db = require('../models')

let getAllDoctors = async (req, res) => {
    let { page, pagesize, name, specialtyID, clinicAddress } = req.query

    pagesize = parseInt(pagesize)

    pagesize = !pagesize ? 10 : pagesize

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
    let find = {};
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
            limit: pagesize
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


module.exports = {
    getAllDoctors,
}