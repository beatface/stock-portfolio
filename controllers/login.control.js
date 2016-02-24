"use strict";

const passport = require('passport');
// const config = require('../models/user.config');
// const User = require('../models/user.model');
require('../models/user.config');

module.exports.login = () => {
    console.log("attempting to log in");
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    });
};
