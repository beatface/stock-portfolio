"use strict";

const APImodel = require('../models/quotesAPI.model');

module.exports.getData = (req, res) => {
    APImodel.APIrequest(req, res);
};

module.exports.saveData = (req, res) => {
    APImodel.create(req, res);
};
