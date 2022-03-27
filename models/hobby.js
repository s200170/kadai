"use strict"

const mongoose = require("mongoose"),
    hobbySchema = mongoose.Schema({
        name: String,
        message: String
    });

module.exports = mongoose.model("hobby", hobbySchema);