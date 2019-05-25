const mongoose = require('mongoose')
// this is a simple model for a rider with the following parameters
const riderSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Rider', riderSchema)