const multer = require('multer');
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images", false);
    }
}

let uploadFile = multer({ storage: multer.memoryStorage() });

module.exports = uploadFile;