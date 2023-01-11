const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },

    name: { type: String },
    picture: { type: String },

    weights: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Weights"
    }
});

const UserModel = mongoose.model('User', schema);

module.exports = UserModel;