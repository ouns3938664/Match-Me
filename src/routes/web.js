const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home")
const stylemeController = require("../controllers/styleme")
const matchController = require("../controllers/match")
const uploadController = require("../controllers/upload")
const upload = require("../middleware/uploads")

let routes = (app) => {

    router.get("/upme", homeController.getHome);
    router.get("/", matchController.getMatch);
    router.get("/styleme", stylemeController.getStyleme);
    //router.get
    router.post("/upload", upload.single('file'), uploadController.uploadFiles)
    return app.use("/", router);


}

module.exports = routes;