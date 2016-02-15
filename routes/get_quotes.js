"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/get_quotes');

router.get('/quotes', ctrl.index);

module.exports = router;
