"use strict";
/* eslint-disable */
const request = require('request');
const mongoose = require('mongoose');

const Stocks = mongoose.model('Stocks', mongoose.Schema({
    name: String,
    symbol: String,
    lastPrice: Number,
    quantity: Number,
    totalValue: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}));

module.exports.model = Stocks;

module.exports.APIrequest = (req, res) => {
    console.log("got to the API Model");
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${req.params.symbol}`;
    request.get(url, (err, response, body) => {
        if (err) throw err;
        let parsedData = JSON.parse(body);
        res.send(parsedData);
    });
};

module.exports.create = (req, res) => {
    Stocks.create(req.params, (err) => {
        if (err) throw err;
        res.send('Success! Stock saved.');
    });
};

module.exports.getStocks = (req, res) => {
    res.send(req.user.stocks);
};
