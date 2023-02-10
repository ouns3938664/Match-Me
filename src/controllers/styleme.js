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

const pool = mysql.createPool({ pooltest, database: 'nodejs_image_upload' })

var obj = {}

const styleme = app.get('/styleme', (req, res) => {
    pool.getConnection((err, conection) => {
        if (err) throw err

        conection.query('Select * from images', (err, rows) => {
            conection.release()
            if (!err) {
                obj = { pic: rows, Error: err }
                res.render(path.join(`${__dirname}/../views/styleme.ejs`), obj)
            } else {
                console.log(err)
            }
        })
    })
})

//const test = app.get('/test', (req, res) => {
//    res.render(path.join(`${__dirname}/../views/viewtest.ejs`))
//})

module.exports = {
    getStyleme: styleme
}