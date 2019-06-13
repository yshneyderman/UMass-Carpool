const express = require('express')
const router = express.Router()
const Ride = require('../models/ride')

// login page
router.get('/login',(req, res) => {
    // res.render('login')
})

// all riders route
router.get('/', async (req, res) => {
})

// new ride
router.get('/new',(req, res) => {
    // res.render('riders/new', {rider: new Rider()})
})

// create ride auth - create a new ride
// post instead of get
router.post('/', async (req, res) => {
   
})

module.exports = router 