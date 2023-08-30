const db = require("../models")

require("dotenv").config()

const bcrypt = require("bcryptjs");

const deactivateAccount = async (req, res, next) => {
    let user = req.person
    if (user) {
        try {
            let deactivate = await db.Accounts.update({ active: false }, {
                where: {
                    username: user.username,
                    active: true,
                }
            })
            if (deactivate === [0]) {
                console.log("No matching account.")
                return res.status(500).json({
                    message: "wrong username",
                })
            } else {
                next()
            }
        } catch (error) {
            console.log("Cannot deactivate account. Error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        }
    }
}

const createAccount = async (req, res, next) => {
    let account = req.account
    if (account) {
        await db.Accounts.create(account).then(() => {
            return res.status(200).json({
                message: "ok"
            })
        }).catch((error) => {
            console.log("Cannot create account. Error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        })
    }
}

const checkUsername = async (req, res, next) => {
    let username = req.body.username
    try {
        let account = await db.Accounts.findByPk(username, {
            where: {
                active: true,
            }, include: [
                {
                    model: db.Roles,
                    attributes: ["role"]
                }
            ]
        })
        if (account === null) {
            console.log("Username donot exist")
            return res.status(500).json({
                message: "wrong username"
            })
        } else {
            req.account = account
            next()
        }
    } catch (error) {
        console.log("Cannot check username. Error: ", error)
        return res.status(500).json({
            message: "server error!"
        })
    }
}

const checkPassword = async (req, res, next) => {
    let account = req.account
    let password = req.body.password
    if (account) {
        try {
            let compare = await bcrypt.compareSync(password, account.password)
            if (compare) {
                next()
            } else {
                console.log("Password isnot match")
                return res.status(500).json({
                    message: "wrong password"
                })
            }
        } catch (error) {
            console.log("Bcrypt compare password error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        }
    }
}

module.exports = {
    deactivateAccount,
    createAccount,
    checkPassword,
    checkUsername
}