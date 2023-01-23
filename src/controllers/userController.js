const passport = require('passport');
const UserModel = require('../models/userModel');
const WeightsModel = require('../models/weightsModel');
const express = require("express");

const signin = (user) => {
    return null;
};

const register = async (req, res, next, name, email, password) => {
    if(!name || !email || !password) {
        throw new Error('Please provide a name, email, and password');
    }

    console.log(here);

    passport.authenticate("local", function(err, user, info) {
        if(err) {
            throw err;
        }
        if(!user) {
            throw new Error("No user found");
        }
        try {
            user.picture = "";
            user.weights = new WeightsModel();
            req.logIn(user);
            user.save();
        } catch(err) {
            throw err;
        }


    })(req, res, next);
    
};

module.exports = {
    signin: signin,
    register: register
};