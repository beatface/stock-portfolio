"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/register.control');

router.get('/register', (req, res) => {
    res.render('register_preFrontEnd');
});

router.post('/register', ctrl.register);

module.exports = router;
