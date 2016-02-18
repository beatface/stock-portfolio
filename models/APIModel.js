"use strict";
/* eslint-disable */
const request = require('request');
const mongoose = require('mongoose');

const model = mongoose.model('myStocks', mongoose.Schema({
    name: String,
    symbol: String,
    lastPrice: Number,
    change: Number
}));

module.exports.APIrequest = (req, res) => {
    console.log("got to the API Model");
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${req.params.symbol}`;
    request.get(url, (err, response, body) => {
        if (err) throw err;
        let parsedData = JSON.parse(body);
        res.send(parsedData);
    });
}