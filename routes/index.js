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
    res.render('index');
});

module.exports = router;
