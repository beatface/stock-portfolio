"use strict";

const express = require('express');
const router = express.Router();

const getQuotes = require('./get_quotes');

router.use(getQuotes);

module.exports = router;
