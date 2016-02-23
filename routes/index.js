"use strict";

const express = require('express');
const router = express.Router();

const defaultPortfolio = require('./getPortfolio');
const APIData = require('./getAPIStock');

router.use(defaultPortfolio);
router.use(APIData);

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
