const express = require('express')
const router = express.Router()
const Rider = require('../models/rider')

// login page
router.get('/login',(req, res) => {
    res.render('login')
})

// all riders route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== ""){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const riders = await Rider.find({})
        res.render('riders/index', {
            riders: riders, 
            searchOptions: req.query
        })
    }catch{
        res.redirect('/')
    }

    
})

// new ride
router.get('/new',(req, res) => {
    res.render('riders/new', {rider: new Rider()})
})

// create ride auth - create a new ride
// post instead of get
router.post('/', async (req, res) => {
    const rider = new Rider({
        name: req.body.name
    })
    try{
        const newRider = await rider.save()
        // res.redirect('riders/${newRider.id}')
        res.redirect('riders')
    }
    catch{
        res.render('riders/new',{
            rider: rider,
            errorMessage: 'error creating rider'
        })
    }

    
    // we no longer want to send the information
    // res.send(req.body.name)
})

module.exports = router 