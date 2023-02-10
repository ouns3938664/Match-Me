const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pooltest = require('../models/index')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '../static'));
app.set('view engine', 'ejs')
const mysql = require('mysql');

const match = app.get('', (req, res) => {
    res.render(path.join(`${__dirname}/../views/matchme.ejs`))
})

module.exports = {
    getMatch: match
}