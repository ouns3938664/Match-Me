const express = require('express');
const app = express();
const db = require('./src/models')
const initRoutes = require('./src/routes/web')
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
const mysql = require('mysql')
app.set('view engine', 'ejs');

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }))
initRoutes(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db.sequelize.sync({ force: true }).then(() => {
//    console.log(`Drop and re-sync db.`);
//})

db.sequelize.sync();

let port = 3000;
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)

})