"use strict";

const express = require('express');
const router = express.Router();

const defaultPortfolio = require('./default-portfolio');

router.use(defaultPortfolio);

module.exports = router;
