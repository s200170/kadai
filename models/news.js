"use strict"

const mongoose = require("mongoose"),
    threadSchema = mongoose.Schema({
        name: String,
        message: String
    });


module.exports = mongoose.model("thread", threadSchema);