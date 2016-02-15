/*eslint-disable no-alert, no-console */
"use strict";

// const GetQuotes = require('../models/get_quotes');

module.exports.index = (req, res) => {
    console.log('got to get quotes controller!')
    res.render('get_quotes');
};
