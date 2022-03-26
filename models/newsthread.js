"use strict"

const mongoose = require("mongoose"),
    newsthreadSchema = mongoose.Schema({
        name: String,
        message: String
    });

module.exports = mongoose.model("newsthread", newsthreadSchema);