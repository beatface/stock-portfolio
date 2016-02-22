"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/APIControl');

router.get('/quotes/:symbol', ctrl.getData);
router.post('/quotes/:symbol/:name/:lastPrice/:timeStamp', ctrl.saveData);

module.exports = router;
