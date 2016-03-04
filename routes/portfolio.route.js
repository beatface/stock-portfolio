"use strict";

const express = require('express');
const router = express.Router();
const Users = require('../models/user.model');
const Stocks = require('../models/quotesAPI.model').model;


router.get('/portfolio', (req, res) => {
    // using req.session, get user's stocks from the database
    // req.session HAS THE USER'S data
    Users.findById(req.session.passport.user, (err, user) => {
        console.log("portfolio.route line 27", user);
        Stocks.find({user: user}, (err, stocks) => {
            if (err) throw err;
            res.send(stocks);
        });
    });
});

module.exports = router;
