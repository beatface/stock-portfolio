"use strict";

// const config = require('../models/user.config');
const User = require('../models/user.model');

module.exports.register = (req, res) => {
    // if passwords match
    if (req.body.password === req.body.passwordVerify) {
        // look in database for existing user
        User.findOne({email: req.body.email}, (err, user) => {
            if (err) throw err;
            // if the user exists
            if (user) {
                req.session.user = user;
                // redirect to login page
                res.send('exists');
            // if user doesn't exist
            } else {
                // register, then redirect
                User.create(req.body, (err) => {
                    if (err) throw err;
                    res.send('created!');
                });
            }
        });
    } else {
        // rerender register page and notify user that passwords don't match
        res.send(`Passwords don't match`);
    }
};
