"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/APIControl');

router.get('/quotes/:symbol', ctrl.getData);

module.exports = router;
