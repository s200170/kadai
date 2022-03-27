"use strict"

const mongoose = require("mongoose"),
    chatSchema = mongoose.Schema({
        name: String,
        message: String
    });

module.exports = mongoose.model("chat", chatSchema);