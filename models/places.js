const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    geometry: {
        type: {
            type: String,
            enum : ['Point'],
            required: true
        },
        coordinates : {
            type: [Number],
            required: true
        }
    },
    properties: {
        name: String,
    }
})

module.exports = mongoose.model('Place', placeSchema);