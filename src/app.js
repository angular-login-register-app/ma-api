const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/config')
const morgan = require('morgan')

const router = require('./routes/router')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

// connnect to db
mongoose.connect(config.db, {useNewUrlParser: true})

module.exports = app