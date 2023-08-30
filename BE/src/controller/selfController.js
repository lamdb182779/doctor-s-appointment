require("dotenv").config()
const db = require("../models")

const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))

const hiddenEmail = (email) => {
    return email.replace(/^(.{3}).*(\d{2}@.*$)/, "$1****$2")
}

const hiddenPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/^(\d{3}).*(\d{2})$/, "$1****$2")
}

const toImage = (image) => {
    if (image) {
        const imgBuffer = Buffer.from(image).toString("binary")
        return `data:image/jpg;base64,${imgBuffer}`
    }
    return ""
}

const changePw = async (req, res, next) => {
    let { oldpw, newpw } = req.body
    let user = req.user
    if (user) {
        try {
            let info = await db[user.table].findByPk(user.id, {
                where: {
                    active: true
                },
                attributes: ["username"]
            })
            if (info === null) {
                console.log("Cannot get info")
                res.return(500).json({
                    message: "server error!",
                })
            }
            let account = await db.Accounts.findByPk(info.username, {
                where: {
                    active: true
                }
            })
            if (account === null) {
                console.log("Cannot get account")
                res.return(500).json({
                    message: "server error!",
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
                            console.log("no matching data.")
                            res.return(500).json({
                                message: "wrong verify",
                            })
                        }
                        return res.status(200).json({
                            message: "ok",
                        })
                    } catch (error) {
                        console.log("Cannot update data. Error: ", error)
                        return res.status(500).json({
                            message: "server error!"
                        })
                    }
                }
                console.log("Password isnot match")
                return res.status(500).json({
                    message: "wrong password"
                })
            } catch (error) {
                console.log("bcrypt compare password error: ", error)
                return res.status(500).json({
                    message: "server error!"
                })
            }
        } catch (error) {
            console.log("Cannot get data, Error:", error)
            return res.status(500).json({
                message: "server error!"
            })
        }
    }
}

const getInfo = async (req, res, next) => {
    let user = req.user
    if (user) {
        try {
            let info = await db[user.table].findByPk(user.id, {
                where: {
                    active: true
                },
                attributes: {
                    exclude: ["id", "table", "createdAt", "updatedAt", "username", "active"]
                }
            })
            if (info.image) {
                info.image = toImage(info.image)
            }
            if (info.phoneNumber) {
                info.phoneNumber = hiddenPhoneNumber(info.phoneNumber)
            }
            if (info.email) {
                info.email = hiddenEmail(info.email)
            }
            return res.status(200).json({
                message: "ok",
                data: [info]
            })
        } catch (error) {
            console.log("Cannot get info user. Error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        }
    }
}

const getQI = async (req, res, next) => {
    let user = req.user
    if (user) {
        try {
            let info = await db[user.table].findByPk(user.id, {
                where: {
                    active: true
                },
                attributes: ["id", "table", "name"]
            })
            return res.status(200).json({
                message: "ok",
                data: [{
                    id: info.id,
                    table: info.table,
                    name: info.name
                }]
            })
        } catch (error) {
            console.log("Cannot get query info. Error: ", error)
            return res.status(500).json({
                message: "server error!"
            })
        }
    }
    // console.log("Something wrong. Please check the previous step")
    return res.status(200).json({
        message: ""
    })
}

module.exports = {
    changePw,
    getInfo,
    getQI
}