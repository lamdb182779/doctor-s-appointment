const multer = require("multer")

const storage = multer.diskStorage({})

const upload = multer({
    storage
})

const uploadSingle = (req, res) => {
    if (!req.file) {
        console.log("Cannot get file from request")
        return res.status(500).json({
            message: "missing file"
        })
    }

}