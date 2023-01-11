const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    // identifier
    username: { type: String },

    // criteria
    weather: { type: Number },
    time: { type: Number },
    distance: { type: Number },

    // categories
    active: { type: Number },
    artistic: { type: Number },
    exciting: { type: Number },
    social: { type: Number }
});

const WeightsModel = mongoose.model('Weights', schema);

module.exports = WeightsModel;