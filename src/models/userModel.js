// imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// schema
const schema = new mongoose.Schema({
    // properties
    username: { type: String, unique: true }, // primary key
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

// hash a new password whenever password changed and saved
schema.pre('save', async (next) => {

    if(!this.isModified('password')) return next();

    // hash w/ bcrypt
    const hashedPassword = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            console.log(err);
        });
    });

    // set as password in db
    this.password = hashedPassword;

    return next();
});

const UserModel = mongoose.model('User', schema);

module.exports = UserModel;