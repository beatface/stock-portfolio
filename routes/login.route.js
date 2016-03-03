"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/login.control');

router.get('/login', (req, res) => {
    res.render('login_preFrontEnd');
});

router.post('/login', ctrl.login);

router.delete('/logout', (req, res) => {
    req.session.regenerate(function(err) {
        if (err) throw err;
        // cannot access session here
        res.redirect('/login');
    });
});



module.exports = router;
