"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/defaultControl');

router.get('/portfolio', ctrl.showStocks);

module.exports = router;
