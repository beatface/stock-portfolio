"use strict";

/* eslint-disable */

const request = require('request');
const mongoose = require('mongoose');

module.exports.model = mongoose.model('stocks', mongoose.Schema({

}));

module.exports.APIrequest = (req, res) => {
    const url = '';
    request.get(url, (err, response, body) => {

    });
}
