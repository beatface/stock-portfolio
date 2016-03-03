"use strict";

const passport = require('passport');

require('../models/user.config');

module.exports.login = (req, res, next) => {
    console.log("attempting to log in");
    passport.authenticate('local', function(err, user) {
        console.log(`If this function gets called, authentication was successful.`);
        if (err) throw err;
        if (!user) {
            return res.redirect('/#/login');
        }
        req.logIn(user, function(err) {
            if (err) throw err;
            return res.redirect('/#/');
        });
  })(req, res, next);
};
