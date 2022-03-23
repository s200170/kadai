"use strict"

const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
    category:{
        type: String,
    },
    title:{
        type: String,
    },
    message:{
        type:String,
    },
});

module.exports = mongoose.model("thread", threadSchema);