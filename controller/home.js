"use strict"

const httpStatus = require("http-status-codes");

exports.error = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error")
};