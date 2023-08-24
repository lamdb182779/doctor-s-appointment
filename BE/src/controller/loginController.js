const { createJWT, verifyToken } = require('../middleware/jwt-action.js')
const db = require('../models')

const roles = {
    1: "Admins",
    2: "Doctors",
    3: "Staffs",
}

const hiddenEmail = (email) => {
    return email.replace(/^(.{3}).*(\d{2}@.*$)/, '$1****$2')
}

const findUserByUsername = async (req, res, next) => {
    let account = req.account
    if (account) {
        try {
            let user = await db[roles[account.role]].findOne({
                where: {
                    active: true,
                    username: account.username,
                }
            })
            if (user === null) {
                console.log('Username isnot match to any user.')
                return res.status(500).json({
                    message: 'server error!'
                })
            }
            req.user = user
            next()
        } catch (error) {
            console.log('Cannot get user by username. Error: ', error)
            return res.status(500).json({
                message: 'server error!'
            })
        }
    }
}

const checkLogin = async (req, res) => {
    let user = req.user
    if (user) {
        let token = createJWT({
            id: user.id,
            table: user.table,
            name: user.name
        })
        if (token === null) {
            return res.status(500).json({
                message: 'server error!'
            })
        }
        res.cookie("token", token, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 })
        return res.status(200).json({
            message: 'ok',
            data: [token]
        })
    }
}

const findEmail = async (req, res) => {
    let user = req.user
    if (user) {
        if (user.email) {
            user.email = hiddenEmail(user.email)
        }
        return res.status(200).json({
            message: 'ok',
            data: [{
                id: user.id,
                email: user.email,
                table: user.table
            }]
        })
    }
}

const sendVerify = async (req, res) => {
    let { id, table } = req.body
    try {
        let email = await db[table].findByPk(id, {
            where: {
                active: true
            },
            attributes: ['email']
        })
        if (email !== null) {
            return res.status(200).json({
                message: 'ok'
            })
        }
        console.log('Cannot get email by id. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    } catch (error) {
        console.log('Cannot get email. Error:', error)
        return res.status(500).json({
            message: 'server error!'
        })
    }
}

module.exports = {
    checkLogin,
    findEmail,
    sendVerify,
    findUserByUsername,
}