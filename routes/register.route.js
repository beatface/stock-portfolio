"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/register.control');

router.post('/register', ctrl.register);

module.exports = router;
