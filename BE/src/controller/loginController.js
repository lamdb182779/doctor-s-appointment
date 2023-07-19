require('dotenv').config()
const { createJWT, verifyToken } = require('../middleware/jwt-action.js')
const db = require('../models')

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))

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
        const checkPassword = bcrypt.compareSync(password, account.password)
        if (checkPassword) {
            try {
                let data = []
                switch (account.role) {
                    case 1:
                        data = await db.Admins.findAll({
                            where: {
                                username: username
                            },
                            attributes: ['id', 'name', 'phoneNumber', 'email', 'address'],
                        })
                        break;
                    case 2:
                        data = await db.Doctors.findAll({
                            where: {
                                username: username,
                                active: true,
                            },
                            attributes: ['id', 'name', 'phoneNumber', 'email', 'clinicAddress', 'image', 'describe', 'content', 'price'],
                            include: [
                                {
                                    model: db.Specialties,
                                    attributes: ['name']
                                }
                            ]
                        })
                        break;
                    case 3:
                        data = await db.Staffs.findAll({
                            where: {
                                username: username,
                                active: true,
                            },
                            attributes: ['id', 'name', 'gender', 'doB', 'phoneNumber', 'email', 'address', 'image'],
                        })
                        break;
                    default: break;
                }
                data = data.map((item) => {
                    if (item.image) {
                        item.image = toImage(item.image)
                    }
                    return item
                })
                return res.status(200).json({
                    message: 'ok',
                    data: data
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
        console.log('Cannot get data. Error:', error)
        return res.status(500).json({
            message: 'wrong username'
        })
    }
}

module.exports = {
    checkLogin,
}