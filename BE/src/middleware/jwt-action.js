require('dotenv').config()
const jwt = require('jsonwebtoken')

const createJWT = (payload) => {
    let key = process.env.JWT_SECRET
    let expires = {
        // expiresIn: process.env.JWT_EXPIRES
    }
    let token = null
    try {
        token = jwt.sign(payload, key, expires)
    } catch (error) {
        console.log('createJWT Error: ', error)
    }
    return token
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET
    let data = null
    try {
        let decoded = jwt.verify(token, key)
        data = decoded
    } catch (error) {
        console.log('verifyToken Error: ', error)
    }
    return data
}

module.exports = {
    createJWT,
    verifyToken,
}