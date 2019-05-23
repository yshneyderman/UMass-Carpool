const express = require('express')
const router = express.Router()

// login page
router.get('/',(req, res) => {
    res.render('login')
})

// all rides route
router.get('/',(req, res) => {
    res.render('rides/index')
})

// create ride auth - create a new ride
// post instead of get
router.post('', (req, res) => {
    res.send('Create')
})

module.exports = router 