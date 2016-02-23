"use strict";

const APImodel = require('../models/APIModel');
const Stocks = APImodel.model;

module.exports.showStocks = (req, res) => {
    Stocks.find({}, (err, stocks) => {
        if (err) throw err;
        res.send(stocks);
    });
};
