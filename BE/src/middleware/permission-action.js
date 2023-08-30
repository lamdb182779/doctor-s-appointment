const db = require("../models")
const { verifyToken } = require("./jwt-action")

const publicActions = [
    {
        url: "/sse-endpoint",
        method: "GET",
    },
    {
        url: "/",
        method: "GET"
    },
    {
        url: "/specialties",
        method: "GET"
    },
    {
        url: "/doctors/specialties",
        method: "GET"
    },
    {
        url: "/doctors",
        method: "GET"
    },
    {
        url: "/doctors/:id/:time",
        method: "GET"
    },
    {
        url: "/home/doctors",
        method: "GET"
    },
    {
        url: "/home/specialties",
        method: "GET"
    },
    {
        url: "/login/checklogin",
        method: "POST"
    },
    {
        url: "/login/findemail",
        method: "POST"
    },
    {
        url: "/login/sendverify",
        method: "POST"
    },
    {
        url: "/search/:search",
        method: "GET"
    },
    {
        url: "/schedules",
        method: "GET"
    },
    {
        url: "/appointments",
        method: "POST"
    },
    {
        url: "/deletetoken",
        method: "GET"
    },
]
const guestActions = [
    {
        url: "/self",
        method: "GET"
    },
]
const checkAction = (path, method, permission) => {
    path = path.replace(/\/{2,}/g, "/")
    const pathSegments = path.split("/")
    return permission.some((item) => {
        if (item.method === method) {
            const patternSegments = item.url.split("/")
            if (patternSegments.length === pathSegments.length) {
                let sameSegment = 0
                for (let i = 0; i < patternSegments.length; i++) {
                    const patternSegment = patternSegments[i]
                    const pathSegment = pathSegments[i]

                    if (patternSegment.startsWith(":")) {
                        sameSegment++
                        continue
                    }
                    if (patternSegment === pathSegment) {
                        sameSegment++
                    }
                }
                return sameSegment === pathSegments.length
            }
        }
    })
}

const checkToken = (req, res, next) => {
    if (checkAction(req.path, req.method, publicActions)) {
        next()
    } else {
        let cookies = req.cookies
        if (cookies?.token) {
            let token = cookies.token
            let decoded = verifyToken(token)
            if (decoded) {
                req.user = decoded
                next()
            } else {
                console.log("Cannot decode token")
                return res.status(500).json({
                    message: "wrong token"
                })
            }
        } else if (checkAction(req.path, req.method, guestActions)) {
            next()
        } else {
            console.log("Cannot get token from cookies")
            return res.status(500).json({
                message: "missing token"
            })
        }
    }
}

const checkUserPermission = async (req, res, next) => {
    if (checkAction(req.path, req.method, publicActions)) {
        next()
    } else {
        let user = req.user
        if (user?.table) {
            try {
                let role = await db.Roles.findOne({
                    where: {
                        role: user.table
                    }
                })
                if (role === null) {
                    console.log("No role matching")
                    return res.status(500).json({
                        message: "wrong table"
                    })
                }
                try {
                    let permission = await db.Permissions.findAll({
                        where: {
                            roleId: role.id
                        },
                        attributes: ["url", "method"]
                    })
                    permission = permission.map(item => item.dataValues)
                    if (checkAction(req.path, req.method, permission)) {
                        next()
                    } else {
                        console.log("User donot permission to access")
                        return res.status(500).json({
                            message: "access denied"
                        })
                    }
                } catch (error) {
                    console.log("Cannot get permission of this role. Error: ", error)
                    return res.status(500).json({
                        message: "server error!"
                    })
                }
            } catch (error) {
                console.log("Cannot get role of this user. Error: ", error)
                return res.status(500).json({
                    message: "server error!"
                })
            }
        } else if (checkAction(req.path, req.method, guestActions)) {
            next()
        } else {
            console.log("No user role available")
            return res.status(500).json({
                message: "wrong verify"
            })
        }
    }
}

module.exports = {
    checkToken,
    checkUserPermission
}
