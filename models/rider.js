const mongoose = require('mongoose')

const riderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Rider', riderSchema)