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
    const rider = new Rider({
        name: req.body.name
    })
    rider.save((err, newAuthor) => {
        if (err){
            // redirect to the new page with an error message
            res.render('rides/new',{
                rider: rider,
                errorMessage: 'error creating rider'
            })
        } 
        // if there is no error
        else {
            // res.redirect('riders/${newAuthor.id}')
            res.redirect('rides')
        }
    })
    // we no longer want to send the 
    // res.send(req.body.name)
})

module.exports = router 