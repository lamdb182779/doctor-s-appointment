const db = require('../models')
const { Op } = require('sequelize')
const { verifyToken } = require('../middleware/jwt-action.js')
const bcrypt = require('bcryptjs')
const moment = require('moment')

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

const getAllDoctors = async (req, res) => {
    let { page, pagesize, name, specialtyID, clinicAddress } = req.query
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
        if (specialtyID) {
            find.specialtyID = specialtyID
        }
        if (clinicAddress) {
            find.clinicAddress = {
                [Op.substring]: clinicAddress
            }
        }
        let count = await db.Doctors.count({
            where: find,
        })
        if (page > (count - 1) / pagesize + 1) {
            page = parseInt((count - 1) / pagesize + 1)
        }
        page = page === 0 ? 1 : page
        let skip = (page - 1) * pagesize

        //
        try {
            let data = await db.Doctors.findAll({
                where: find,
                offset: skip,
                limit: pagesize,
                attributes: ['id', 'name', 'clinicAddress', 'email', 'phoneNumber', 'describe', 'image'],
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

const getDoctorById = async (req, res) => {
    let id = req.params.id
    try {
        let count = await db.Doctors.count()
        if (id > count || id <= 0) {
            return res.status(404).json({
                message: 'data not found',
            })
        }
        if (!id) {
            return res.status(400).json({
                message: 'missing required param'
            })
        }
        try {
            let data = await db.Doctors.findByPk(id)
            if (data.image) {
                data.image = toImage(data.image)
            }
            if (data.phoneNumber) {
                data.phoneNumber = hiddenPhoneNumber(data.phoneNumber)
            }
            if (data.email) {
                data.email = hiddenEmail(data.email)
            }
            return res.status(200).json({
                message: 'ok',
                data: [data]
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

const deleteDoctorById = async (req, res) => {
    let { id } = req.query
    let { token } = req.body
    token = verifyToken(token)
    if (token === null) {
        return res.return(500).json({
            message: 'wrong verify',
        })
    }
    try {
        let doctor = await db.Doctors.findByPk(id, {
            where: {
                active: true,
            }
        })
        if (doctor === null) {
            console.log('no matching doctor.')
            return res.return(500).json({
                message: 'wrong id',
            })
        }
        try {
            let deactivate = await db.Accounts.update({ active: false }, {
                where: {
                    username: doctor.username,
                    active: true,
                }
            })
            if (deactivate === [0]) {
                console.log('no matching account.')
                return res.return(500).json({
                    message: 'wrong username',
                })
            }
            try {
                let data = await db.Doctors.update({ active: false }, {
                    where: {
                        id: id,
                        active: true,
                    }
                })
                if (data === [0]) {
                    console.log('no matching data.')
                    res.return(500).json({
                        message: 'wrong id',
                    })
                }
                return res.status(200).json({
                    message: 'ok',
                })
            } catch (error) {
                console.log('Cannot update data. Error: ', error)
                return res.status(500).json({
                    message: 'server error!'
                })
            }
        } catch (error) {
            console.log('Cannot update account. Error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    } catch (error) {
        console.log('Cannot get doctor. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const updateDoctorById = async (req, res) => {
    let { id } = req.query
    let { name, phoneNumber, email, clinicAddress, describe, price, content, token } = req.body
    token = verifyToken(token)
    if (token === null) {
        return res.status(500).json({
            message: 'wrong verify',
        })
    }
    if (email) {
        try {
            let checkEmail = await db.Doctors.findAll({
                where: {
                    email: email
                }
            })
            if (checkEmail?.length > 0) {
                console.log('Duplicate Email')
                return res.status(500).json({
                    message: 'duplicate email'
                })
            }
        } catch (error) {
            console.log('Cannot check email. Error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    }
    let update = {}
    if (name) {
        update.name = name
    }
    if (phoneNumber) {
        update.phoneNumber = phoneNumber
    }
    if (email) {
        update.email = email
    }
    if (clinicAddress) {
        update.clinicAddress = clinicAddress
    }
    if (describe) {
        update.describe = describe
    }
    if (price) {
        update.price = price
    }
    if (content) {
        update.content = content
    }
    try {
        let data = db.Doctors.update(update, {
            where: {
                id: id,
                active: true,
            }
        })
        if (data === [0]) {
            console.log('no matching data')
            return res.status(500).json({
                message: 'wrong id'
            })
        }
        return res.status(200).json({
            message: 'ok'
        })
    } catch (error) {
        console.log('Cannot update data. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const addNewDoctor = async (req, res) => {
    let { name, phoneNumber, email, clinicAddress, describe, price, content, specialtyID, token } = req.body
    token = verifyToken(token)
    if (token === null) {
        return res.status(500).json({
            message: 'wrong verify',
        })
    }
    try {
        let checkEmail = await db.Doctors.findAll({
            where: {
                email: email
            }
        })
        if (checkEmail?.length > 0) {
            console.log('Duplicate Email')
            return res.status(500).json({
                message: 'duplicate email'
            })
        }
        try {
            let count = await db.Doctors.count()
            let id = (count + 1).toString().padStart(4, "0")
            let username = nameToUsername(name, id)
            let password = bcrypt.hashSync(username, salt)
            await db.Doctors.create({
                id: id,
                name: name,
                image: null,
                phoneNumber: phoneNumber,
                email: email,
                username: username,
                clinicAddress: clinicAddress,
                describe: describe,
                price: price,
                content: content,
                specialtyID: specialtyID,
                active: true,
            }).then(async () => {
                await db.Accounts.create({
                    username: username,
                    password: password,
                    active: true,
                    role: 2
                }).then(async () => {
                    const startOfWeekNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
                    for (let i = 0; i < 7; i++) {
                        const date = moment(startOfWeekNextWeek).add(i, 'days')

                        for (let hour = 0; hour < 16; hour++) {
                            const time = hour.toString().padStart(2, '0')
                            await db.Schedules.create({
                                id: date.format('DDMMYYYY') + time + id,
                                maxNumber: 3,
                                currentNumber: 0,
                                date: new Date(date.format('YYYY-MM-DD')),
                                time: time,
                                doctorId: id,
                                createdAt: new Date(),
                                updatedAt: new Date()
                            }).catch((error) => {
                                console.log('Cannot create schedules. Error: ', error)
                                return res.status(500).json({
                                    message: 'server error!'
                                })
                            })
                        }
                    }
                    return res.status(200).json({
                        message: 'ok'
                    })
                }).catch((error) => {
                    console.log('Cannot create account. Error: ', error)
                    return res.status(500).json({
                        message: 'server error!'
                    })
                })
            }).catch((error) => {
                console.log('Cannot create doctor. Error: ', error)
                return res.status(500).json({
                    message: 'server error!'
                })
            })
        } catch (error) {
            console.log('Cannot count doctors. Error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    } catch (error) {
        console.log('Cannot check email. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const getSpecialtiesName = async (req, res) => {
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
            message: 'server error!'
        })
    }
}

module.exports = {
    getAllDoctors,
    getSpecialtiesName,
    getDoctorById,
    deleteDoctorById,
    updateDoctorById,
    addNewDoctor,
}