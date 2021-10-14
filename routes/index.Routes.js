const express = require('express')
const router = express.Router()
const ArrProducts = require('../products/products.array')

router.get('/', (req, res) => {
    res.render('home', {})
})

module.exports = router
