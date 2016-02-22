"use strict";

const APImodel = require('../models/APIModel');
const Stocks = APImodel.model;

module.exports.getData = (req, res) => {
    console.log("got to the API Controller");
    APImodel.APIrequest(req, res);
};

module.exports.saveData = (req, res) => {
    console.log("req body>>>", req.params);
    Stocks.create(req.params, (err) => {
        if (err) throw err;
        res.send('Success! Stock saved.');
    });
};
