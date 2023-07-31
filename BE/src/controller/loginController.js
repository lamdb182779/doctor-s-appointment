require('dotenv').config()
const { createJWT, verifyToken } = require('../middleware/jwt-action.js')
const db = require('../models')

const bcrypt = require('bcryptjs');

const hiddenEmail = (email) => {
    return email.replace(/^(.{3}).*(\d{2}@.*$)/, '$1****$2')
}

const hiddenPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/^(\d{3}).*(\d{2})$/, '$1****$2')
}

const toImage = (image) => {
    if (image) {
        const imgBuffer = Buffer.from(image).toString('binary')
        return `data:image/jpg;base64,${imgBuffer}`
    }
    return ""
}

const checkLogin = async (req, res) => {
    let { username, password } = req.body
    try {
        let account = await db.Accounts.findOne({
            where: {
                username: username,
                active: true
            }
        })
        if (!account) {
            console.log('Username donot exist')
            return res.status(500).json({
                message: 'wrong username'
            })
        }
        try {
            const checkPassword = bcrypt.compareSync(password, account.password)
            if (checkPassword) {
                try {
                    let data = null
                    switch (account.role) {
                        case 1:
                            data = await db.Admins.findOne({
                                where: {
                                    username: username,
                                    active: true
                                },
                                attributes: ['id', 'name', 'table'],
                            })
                            break;
                        case 2:
                            data = await db.Doctors.findOne({
                                where: {
                                    username: username,
                                    active: true,
                                },
                                attributes: ['id', 'name', 'table'],
                            })
                            break;
                        case 3:
                            data = await db.Staffs.findOne({
                                where: {
                                    username: username,
                                    active: true,
                                },
                                attributes: ['id', 'name', 'table'],
                            })
                            break;
                        default: break;
                    }
                    if (data === null) {
                        console.log('Cannot get user.')
                        return res.status(500).json({
                            message: 'server error!'
                        })
                    }
                    let token = createJWT({
                        id: data.id,
                        table: data.table
                    })
                    if (token === null) {
                        return res.status(500).json({
                            message: 'server error!'
                        })
                    }
                    data.dataValues.token = token
                    return res.status(200).json({
                        message: 'ok',
                        data: [data]
                    })
                } catch (error) {
                    console.log('Cannot get data. Error: ', error)
                    return res.status(500).json({
                        message: 'server error!'
                    })
                }
            }
            console.log('Password isnot match')
            return res.status(500).json({
                message: 'wrong password'
            })
        } catch (error) {
            console.log('bcrypt compare password error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    } catch (error) {
        console.log('Cannot get data. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const findEmail = async (req, res) => {
    let { username } = req.body
    try {
        let account = await db.Accounts.findOne({
            where: {
                username: username,
                active: true
            },
            attributes: ['role'],
        })
        if (!account) {
            console.log('Username donot exist')
            return res.status(500).json({
                message: 'wrong username'
            })
        }
        try {
            let data = []
            switch (account.role) {
                case 1:
                    data = await db.Admins.findOne({
                        where: {
                            username: username,
                            active: true
                        },
                        attributes: ['id', 'email', 'table'],
                    })
                    break
                case 2:
                    data = await db.Doctors.findOne({
                        where: {
                            username: username,
                            active: true
                        },
                        attributes: ['id', 'email', 'table'],
                    })
                    break
                case 3:
                    data = await db.Staffs.findOne({
                        where: {
                            username: username,
                            active: true
                        },
                        attributes: ['id', 'email', 'table'],
                    })
                    break
                default: break
            }
            if (data.email) {
                data.email = hiddenEmail(data.email)
            }
            data.dataValues.table = data.table
            return res.status(200).json({
                message: 'ok',
                data: [data]
            })
        } catch (error) {
            console.log('Cannot get data. Error:', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    } catch (error) {
        console.log('Cannot get data. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const sendVerify = async (req, res) => {
    let { id, table } = req.body
    try {
        let data = await db[table].findByPk(id, {
            where: {
                active: true
            },
            attributes: ['email']
        })
        if (data !== null) {
            return res.status(200).json({
                message: 'ok'
            })
        }
        console.log('Cannot find by Id. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    } catch (error) {
        console.log('Cannot get data. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

module.exports = {
    checkLogin,
    findEmail,
    sendVerify,
}