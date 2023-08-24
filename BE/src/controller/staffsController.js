const db = require('../models')
const { Op } = require('sequelize')
const { verifyToken } = require('../middleware/jwt-action.js')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))

const toImage = (image) => {
    if (image) {
        const imgBuffer = Buffer.from(image).toString('binary')
        return `data:image/jpg;base64,${imgBuffer}`
    }
    return ""
}

const hiddenEmail = (email) => {
    return email.replace(/^(.{3}).*(\d{2}@.*$)/, '$1****$2')
}

const hiddenPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/^(\d{3}).*(\d{2})$/, '$1****$2')
}

const nameToUsername = (name, id) => {
    let normal = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
    let lower = normal.toLowerCase()
    let split = lower.split(" ")
    let username = split[split.length - 1]
    split.map((item, index) => {
        if (index !== split.length - 1) {
            username = username + item[0]
        }
    })
    username = username + id
    return username
}

const findStaffById = async (req, res, next) => {
    let id = req.params.id.toString()
    try {
        let staff = await db.Staffs.findByPk(id, {
            where: {
                active: true,
            }
        })
        if (staff === null) {
            console.log('No matching staff.')
            return res.status(500).json({
                message: 'wrong id',
            })
        } else {
            req.person = staff
            next()
        }
    } catch (error) {
        console.log('Cannot get doctor. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const checkDupEmail = async (req, res, next) => {
    let email = req.body.email
    if (email) {
        try {
            let user = await db["Staffs"].findAll({
                where: {
                    email: email
                }
            })
            if (user?.length > 0) {
                console.log('Duplicate Email')
                return res.status(500).json({
                    message: 'duplicate email'
                })
            } else {
                next()
            }
        } catch (error) {
            console.log('Cannot check duplicate email. Error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    } else {
        next()
    }
}

const getAllStaffs = async (req, res) => {
    let { page, pagesize, name } = req.query
    page = parseInt(page)
    pagesize = parseInt(pagesize)

    pagesize = !pagesize ? 5 : pagesize

    pagesize = pagesize > 15 ? 15 : pagesize

    page = !page ? 1 : page
    try {
        //Structure data need to find
        let find = { active: true };
        if (name) {
            find.name = {
                [Op.substring]: name
            }
        }
        let count = await db.Staffs.count({
            where: find,
        })
        if (page > (count - 1) / pagesize + 1) {
            page = parseInt((count - 1) / pagesize + 1)
        }
        page = page === 0 ? 1 : page
        let skip = (page - 1) * pagesize

        //
        try {
            let data = await db.Staffs.findAll({
                where: find,
                offset: skip,
                limit: pagesize,
                attributes: ['id', 'name', 'address', 'email', 'phoneNumber', 'gender', 'doB', 'image'],
            })

            // data = data.map((item) => {
            //     item.image = toImage(item.image)
            //     return item
            // })
            data = data.map((item) => {
                if (item.phoneNumber) {
                    item.phoneNumber = hiddenPhoneNumber(item.phoneNumber)
                }
                return item
            })
            data = data.map((item) => {
                if (item.email) {
                    item.email = hiddenEmail(item.email)
                }
                return item
            })
            data.push(count)

            return res.status(200).json({
                message: 'ok',
                data: data
            })
        } catch (err) {
            console.log('Cannot get data. Error:', err)
            return res.status(500).json({
                message: 'server error!',
            })
        }
    } catch (err) {
        console.log('Cannot count. Error: ', err)
        return res.status(500).json({
            message: 'server error!',
        })
    }
}

const getStaffById = async (req, res) => {
    let staff = req.person
    if (staff) {
        if (staff.image) {
            staff.image = toImage(staff.image)
        }
        if (staff.phoneNumber) {
            staff.phoneNumber = hiddenPhoneNumber(staff.phoneNumber)
        }
        if (staff.email) {
            staff.email = hiddenEmail(staff.email)
        }
        return res.status(200).json({
            message: 'ok',
            data: [staff]
        })
    }
}

const deleteStaffById = async (req, res) => {
    let id = req.params.id.toString()
    try {
        let deactivate = await db.Staffs.update({ active: false }, {
            where: {
                id: id,
                active: true,
            }
        })
        if (deactivate === [0]) {
            console.log('No matching staff.')
            res.return(500).json({
                message: 'wrong id',
            })
        }
        return res.status(200).json({
            message: 'ok',
        })
    } catch (error) {
        console.log('Cannot deactive staff. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const updateStaffById = async (req, res) => {
    let id = req.params.id.toString()
    let { name, phoneNumber, email, address, doB, gender } = req.body
    let update = { gender: gender }
    if (name) {
        update.name = name
    }
    if (phoneNumber) {
        update.phoneNumber = phoneNumber
    }
    if (email) {
        update.email = email
    }
    if (address) {
        update.address = address
    }
    if (doB) {
        update.doB = doB
    }
    try {
        let staff = db.Staffs.update(update, {
            where: {
                id: id,
                active: true,
            }
        })
        if (staff === [0]) {
            console.log('no matching staff')
            return res.status(500).json({
                message: 'wrong id'
            })
        }
        return res.status(200).json({
            message: 'ok'
        })
    } catch (error) {
        console.log('Cannot update staff. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const addNewStaff = async (req, res) => {
    let { name, phoneNumber, email, address, doB, gender } = req.body
    try {
        let count = await db.Staffs.count()
        let id = (count + 1).toString().padStart(3, "0")
        let username = nameToUsername(name, id)
        let password = bcrypt.hashSync(username, salt)
        await db.Staffs.create({
            id: id,
            name: name,
            image: null,
            phoneNumber: phoneNumber,
            email: email,
            username: username,
            address: address,
            gender: gender,
            doB: doB,
            active: true,
        }).then(() => {
            req.account = {
                username: username,
                password: password,
                role: 3,
                active: true,
            }
        }).catch((error) => {
            console.log('Cannot create staff. Error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        })
    } catch (error) {
        console.log('Cannot count staffs. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

module.exports = {
    findStaffById,
    checkDupEmail,
    getAllStaffs,
    getStaffById,
    deleteStaffById,
    updateStaffById,
    addNewStaff,
}