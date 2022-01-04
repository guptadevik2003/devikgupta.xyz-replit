const express = require('express')

const router = express.Router()

// arc-sw.js
router.get('/arc-sw.js', async (req, res) => {
    res.sendFile(`${process.cwd()}/views/javascripts/arc-sw.js`)
})

// home.ejs
router.get('/', async (req, res) => {
    res.render('home.ejs')
})
router.get('/home', async (req, res) => {
    res.render('home.ejs')
})

module.exports = router
