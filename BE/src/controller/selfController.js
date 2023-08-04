require('dotenv').config()
const { createJWT, verifyToken } = require('../middleware/jwt-action.js')
const db = require('../models')

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))

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

const changePw = async (req, res) => {
    let { oldpw, newpw, token } = req.body
    token = verifyToken(token)
    if (token === null) {
        res.return(500).json({
            message: 'wrong verify',
        })
    }
    try {
        let user = await db[token.table].findByPk(token.id, {
            where: {
                active: true
            }
        })
        if (user === null) {
            console.log('Cannot get user')
            res.return(500).json({
                message: 'server error!',
            })
        }
        let account = await db.Accounts.findByPk(user.username, {
            where: {
                active: true
            }
        })
        if (account === null) {
            console.log('Cannot get account')
            res.return(500).json({
                message: 'server error!',
            })
        }
        try {
            const checkPassword = bcrypt.compareSync(oldpw, account.password)
            if (checkPassword) {
                try {
                    let data = await db.Accounts.update({
                        password: bcrypt.hashSync(newpw, salt),
                    }, {
                        where: {
                            username: account.username,
                            active: true,
                        }
                    })
                    if (data === [0]) {
                        console.log('no matching data.')
                        res.return(500).json({
                            message: 'wrong verify',
                        })
                    }
                    console.log(data)
                    return res.status(200).json({
                        message: 'ok',
                    })
                } catch (error) {
                    console.log('Cannot update data. Error: ', error)
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
        console.log('Cannot get data, Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

const getInfo = async (req, res) => {
    let { token } = req.body
    token = verifyToken(token)
    if (token === null) {
        res.return(500).json({
            message: 'wrong verify',
        })
    }
    try {
        let data = await db[token.table].findByPk(token.id, {
            where: {
                active: true
            },
            attributes: {
                exclude: ['id', 'table', 'createdAt', 'updatedAt', 'username', 'active']
            }
        })
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
    } catch (error) {
        console.log('Cannot get data. Error: ', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

module.exports = {
    changePw,
    getInfo,
}