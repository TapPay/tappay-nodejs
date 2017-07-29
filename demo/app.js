'use strict'
require('./process.env.js')
const express = require('express')
const path = require('path')
const app = express()
const bodyParse = require('body-parser')
const TapPay = require('../index.js')

TapPay.initialize({
    api_key: process.env.PARTNER_KEY,
    environment: process.env.ENV
})

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({
    extended: true
}))

app.set('view engine', 'pug')
app.set('views', __dirname)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.locals.APP_ID = process.env.APP_ID
    res.locals.APP_KEY = process.env.APP_KEY
    res.locals.ENV = process.env.ENV
    res.render('./index')
})

const TapPayCtrl = require('./TapPayCtrl.js')

app.post('/pay', TapPayCtrl.pay)
app.post('/refund', TapPayCtrl.refund)

app.listen(8080, function() {
    console.log('Http Servier is listened on the 8080 port')
})
