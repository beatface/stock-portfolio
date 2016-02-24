"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const BCRYPT_DIFFICULTY = 11;

const UserSchema = mongoose.Schema({
    email: String,
    password: String
});

// Method on the schema to authenticate a user through bcrypt
UserSchema.methods.confirmAuth = function (password, callback) {
    bcrypt.compare(password, this.password, callback);
};

// Pre middleware on the schema to hash the password before going forward
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, BCRYPT_DIFFICULTY, (err, hash) => {
        if (err) throw err;
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model('users', UserSchema);
