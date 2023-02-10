const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pooltest = require('../models/index')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs')
const mysql = require('mysql');

const home = app.get('/upme', (req, res) => {
    res.render(path.join(`${__dirname}/../views/index.ejs`))
})

module.exports = {
    getHome: home
}