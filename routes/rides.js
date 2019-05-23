const express = require('express')
const router = express.Router()
const Rider = require('../models/rider')

// login page
router.get('/login',(req, res) => {
    res.render('login')
})

// all rides route
router.get('/',(req, res) => {
    res.render('rides/index')
})

// new ride
router.get('/new',(req, res) => {
    res.render('rides/new', {rider: new Rider()})
})

// create ride auth - create a new ride
// post instead of get
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router 