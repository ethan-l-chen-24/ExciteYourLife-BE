// imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// schema
const schema = new mongoose.Schema({
    // properties
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },

    name: { type: String },
    picture: { type: String },

    // pointer to weights object
    weights: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Weights"
    }
});

const UserModel = mongoose.model('User', schema);

module.exports = UserModel;