const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/config')

const router = require('./routes/router')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

// connnect to db
mongoose.connect(config.db, {useNewUrlParser: true})

module.exports = app