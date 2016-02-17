"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/defaultControl');

router.get('/', ctrl.index);

module.exports = router;
