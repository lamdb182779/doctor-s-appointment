require("dotenv").config()
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path')

const folderPath = path.join(__dirname, "../../../image_seeders/Staffs");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        const filePath = `${folderPath}/${file}`;

        cloudinary.uploader.upload(filePath, { folder: "Staffs", public_id: file })
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            });
    });
});