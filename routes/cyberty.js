const express = require('express')
const path = require('path')

const router = express.Router()

// cyberty-home.ejs
router.get('/', async (req, res) => {
    res.render('cyberty-home.ejs')
})

// cyberty-invite.ejs
router.get('/invite', async (req, res) => {
    res.render('cyberty-invite.ejs')
})

module.exports = router
