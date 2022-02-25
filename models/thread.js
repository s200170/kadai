"use strict"

const mongoose = require("mongoose"),
    threadSchema = mongoose.Schema({
        thread: String,
        message: String
    });

module.exports = mongoose.model("thread", threadSchema);