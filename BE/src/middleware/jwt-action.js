require("dotenv").config()
const jwt = require("jsonwebtoken")

const createJWT = (payload) => {
    let key = process.env.JWT_SECRET
    let expires = {
        // expiresIn: process.env.JWT_EXPIRES
    }
    try {
        let token = jwt.sign(payload, key, expires)
        return token
    } catch (error) {
        console.log("CreateJWT Error: ", error)
        return null
    }
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET
    try {
        let decoded = jwt.verify(token, key)
        return decoded
    } catch (error) {
        console.log("VerifyToken Error: ", error)
        return null
    }
}

module.exports = {
    createJWT,
    verifyToken,
}