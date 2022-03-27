"use strict"

const mongoose = require("mongoose"),
    foodsSchema = mongoose.Schema({
        name: String,
        message: String
    });

module.exports = mongoose.model("foods", foodsSchema);