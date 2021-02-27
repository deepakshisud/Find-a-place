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

module.exports.Place = mongoose.model('Place', placeSchema);