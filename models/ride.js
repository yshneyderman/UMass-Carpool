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
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: TimeRanges,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    rider: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Rider'
    }
})

module.exports = mongoose.model('Rider', riderSchema)