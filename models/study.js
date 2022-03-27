"use strict"

const mongoose = require("mongoose"),
    studySchema = mongoose.Schema({
        name: String,
        message: String
    });

module.exports = mongoose.model("study", studySchema);