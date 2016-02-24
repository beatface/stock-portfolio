"use strict";

const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./user.model');

const SUCCESSFUL_LOGIN_MSG = 'Success!';
const INCORRECT_USERNAME_MSG = 'Incorrect Username or password';
const INCORRECT_PASSWORD_MSG = 'Incorrect Username or password';

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, done);
});

passport.use(new LocalStrategy ({
    usernameField: 'email'
    }, (email, password, done) => {
        // look for the user in the database
        User.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            // if the user exists
            if (user) {
                // use schema method to confirm if hashes match
                user.confirmAuth(password, (err, valid) => {
                    if (err) throw err;
                    if (valid) {
                        return done(null, user, { message: SUCCESSFUL_LOGIN_MSG });
                    } else {
                        return done(null, null, { message: INCORRECT_PASSWORD_MSG });
                    }
                });
            // else, send error message to the user
            } else {
                return done(null, null, { message: INCORRECT_USERNAME_MSG });
            }
        });
    })
);
