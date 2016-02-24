"use strict";

const express = require('express');
const router = express.Router();
// const ctrl = require('../controllers/portfolio.control');
const Users = require('../models/user.model');
const Stocks = require('../models/quotesAPI.model');

router.param('id', (req, res, next, id) => {
    Users.findById(id, (err, user) => {
        if (err) throw err;
        req.user = user;

        Stocks.find({user: id}, (err, stocks) => {
            if (err) throw err;
            req.user.stocks = stocks;
            next();
        });
    });
});

router.get('/portfolio', (req, res) => {
    res.send(req.user.stocks);
});

module.exports = router;
