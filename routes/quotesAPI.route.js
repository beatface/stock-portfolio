"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/quotesAPI.control');

router.get('/quotes/:symbol', ctrl.getData);
router.post('/quotes/:quantity/:symbol/:name/:lastPrice/:totalValue', ctrl.saveData);

module.exports = router;
