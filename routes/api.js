const express = require('express')
const path = require('path')
const { isAuth, isNotAuth } = require('../otherFunctions/authValidator')

const router = express.Router()

router.get('/', async (req, res) => {
    res.json({ msg: 'API Route is Working.' })
})

module.exports = router
