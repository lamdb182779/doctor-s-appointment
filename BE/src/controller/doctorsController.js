const db = require("../models")
const { Op } = require("sequelize")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const { verifyToken } = require("../middleware/jwt-action")

const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))

// const toImage = (image) => {
//     if (image) {
//         const imgBuffer = Buffer.from(image).toString("binary")
//         return `data:image/jpg;base64,${imgBuffer}`
//     }
//     return ""
// }

const hiddenEmail = (email) => {
    return email.replace(/^(.{1}).*(\d{2}@.*$)/, "$1***$2")
}

const hiddenPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/^(\d{1}).*(\d{1})$/, "$1***$2")
}

const checkAdminPermission = (cookies) => {
    if (cookies?.token) {
        let token = cookies.token
        let decoded = verifyToken(token)
        if (decoded?.table && decoded.table === "Admins") {
            return true
        }
    }
    return false
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

const findDoctorById = async (req, res, next) => {
    let id = req.params.id.toString()
    try {
        let doctor = await db.Doctors.findByPk(id, {
            where: {
                active: true,
            }
        })
        if (doctor === null) {
            console.log("No matching doctor.")
            return res.status(500).json({
                message: "wrong id",
            })
        } else {
            req.person = doctor
            next()
        }
    } catch (error) {
        console.log("Cannot get doctor. Error: ", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

const checkDupEmail = async (req, res, next) => {
    let email = req.body.email
    if (email) {
        try {
            let user = await db["Doctors"].findAll({
                where: {
                    email: email
                }
            })
            if (user?.length > 0) {
                console.log("Duplicate Email")
                return res.status(500).json({
                    message: "duplicate email"
                })
            } else {
                next()
            }
        } catch (error) {
            console.log("Cannot check duplicate email. Error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        }
    } else {
        next()
    }
}

const getAllDoctors = async (req, res, next) => {
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
                attributes: ["id", "name", "clinicAddress", "price", "describe", "image", "email", "phoneNumber"],
                include: [
                    {
                        model: db.Specialties,
                        attributes: ["name"]
                    }
                ]
            })
            if (!checkAdminPermission(req.cookies)) {
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
            }
            data.push(count)

            return res.status(200).json({
                message: "ok",
                data: data
            })
        } catch (err) {
            console.log("Cannot get data. Error:", err)
            return res.status(500).json({
                message: "server error!",
            })
        }
    } catch (err) {
        console.log("Cannot count. Error: ", err)
        return res.status(500).json({
            message: "server error!",
        })
    }
}

const getDoctorById = async (req, res, next) => {
    let doctor = req.person
    if (doctor) {
        if (!checkAdminPermission(req.cookies)) {
            if (doctor.phoneNumber) {
                doctor.phoneNumber = hiddenPhoneNumber(doctor.phoneNumber)
            }
            if (doctor.email) {
                doctor.email = hiddenEmail(doctor.email)
            }
        }
        return res.status(200).json({
            message: "ok",
            data: [doctor]
        })
    }
    // console.log("Something wrong. Please check the previous step")
    // return res.status(200).json({
    //     message: "ok"
    // })
}

const deleteDoctorById = async (req, res, next) => {
    let id = req.params.id.toString()
    try {
        let deactivate = await db.Doctors.update({ active: false }, {
            where: {
                id: id,
                active: true,
            }
        })
        if (deactivate.isEqual(0)) {
            console.log("No matching doctor.")
            return res.status(500).json({
                message: "server error",
            })
        }
        return res.status(200).json({
            message: "ok",
        })
    } catch (error) {
        console.log("Cannot deactivate doctor. Error: ", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

const updateDoctorById = async (req, res, next) => {
    let id = req.params.id.toString()
    let { name, phoneNumber, email, clinicAddress, describe, price, content } = req.body
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
        let doctor = db.Doctors.update(update, {
            where: {
                id: id,
                active: true,
            }
        })
        if (doctor.isEqual([0])) {
            console.log("No matching doctor")
            return res.status(500).json({
                message: "wrong id"
            })
        }
        return res.status(200).json({
            message: "ok"
        })
    } catch (error) {
        console.log("Cannot update doctor. Error: ", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

const addNewDoctor = async (req, res, next) => {
    let { name, phoneNumber, email, clinicAddress, describe, price, content, specialtyID } = req.body
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
            const startOfWeekNextWeek = moment().add(1, "weeks").startOf("isoWeek")
            for (let i = 0; i < 7; i++) {
                const date = moment(startOfWeekNextWeek).add(i, "days")

                for (let hour = 0; hour < 16; hour++) {
                    const time = hour.toString().padStart(2, "0")
                    await db.Schedules.create({
                        id: date.format("DDMMYYYY") + time + id,
                        maxNumber: 3,
                        currentNumber: 0,
                        date: new Date(date.format("YYYY-MM-DD")),
                        time: time,
                        doctorId: id,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }).then(() => {
                        req.account = {
                            username: username,
                            password: password,
                            role: 2,
                            active: true,
                        }
                        next()
                    }).catch((error) => {
                        console.log("Cannot create schedules. Error: ", error)
                        return res.status(500).json({
                            message: "server error!"
                        })
                    })
                }
            }
        }).catch((error) => {
            console.log("Cannot create doctor. Error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        })
    } catch (error) {
        console.log("Cannot count doctors. Error: ", error)
        return res.status(500).json({
            message: "server error!"
        })
    }

}

const getSpecialtiesName = async (req, res, next) => {
    try {
        let data = await db.Specialties.findAll({
            attributes: ["id", "name"]
        })
        return res.status(200).json({
            message: "ok",
            data: data
        })
    } catch (error) {
        console.log("Cannot get data. Error:", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

module.exports = {
    findDoctorById,
    checkDupEmail,
    getAllDoctors,
    getSpecialtiesName,
    getDoctorById,
    deleteDoctorById,
    updateDoctorById,
    addNewDoctor,
}