const express = require('express')
const path = require('path')
const { isAuth, isNotAuth } = require('../otherFunctions/authValidator')

const router = express.Router()

// javascripts/arc-sw.js
router.get('/arc-sw.js', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/javascripts/arc-sw.js'))
})

// home.ejs
router.get('/', async (req, res) => {
    res.render('home.ejs')
})
router.get('/home', async (req, res) => {
    res.render('home.ejs')
})

// login.ejs & register.ejs
router.get('/login', async (req, res) => {
    res.render('login.ejs')
})
router.get('/register', async (req, res) => {
    res.render('register.ejs')
})

module.exports = router
