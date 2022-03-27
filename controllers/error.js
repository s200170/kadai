"use strict"

const httpStatus = require("http-status-codes");

exports.Error = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};