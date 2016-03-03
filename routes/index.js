"use strict";

const express = require('express');
const router = express.Router();

const portfolio = require('./portfolio.route');
const APIData = require('./quotesAPI.route');
const login = require('./login.route');
const register = require('./register.route');

router.use(portfolio);
router.use(APIData);
router.use(login);
router.use(register);


// default to load angular partials
router.get('/', (req, res) => {
    if (req.user) {
        res.render('index');
    } else {
        res.redirect('/login');
    }
});

router.get('*', function(req, res) {
    if (req.user) {
        res.redirect('/#/');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
