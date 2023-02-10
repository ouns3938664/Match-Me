const fs = require("fs");
const db = require('../models');
const Image = db.images;
const uploadFiles = async(req, res) => {
    try {
        console.log(req.file);
        if (req.file == undefined) {
            return res.send("Please select a file.");
        }

        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: req.file.buffer.toString('base64')
        }).then((image) => {
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp/" + image.name, image.data
            )

            return res.send('File has been uploaded.');
        })

    } catch (error) {
        console.log(error);
        return res.send(`Error can't upload image : ${error}`);
    }
}

module.exports = {
    uploadFiles
}