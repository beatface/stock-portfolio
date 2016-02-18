"use strict";

const APImodel = require('../models/APIModel');

module.exports.getData = (req, res) => {
    console.log("got to the API Controller");
    APImodel.APIrequest(req, res);
};
