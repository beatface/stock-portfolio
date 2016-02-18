"use strict";

const express = require('express');
const router = express.Router();

const defaultPortfolio = require('./default-portfolio');
const APIData = require('./getAPIStock');

router.use(defaultPortfolio);
router.use(APIData);

module.exports = router;
