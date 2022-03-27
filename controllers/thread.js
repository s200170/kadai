"use strict";

const thread = require("../models/thread");


//news
exports.getallnewsthread = (req, res) => {
    thread.find({})
        .exec()
        .then(news => {
            res.render("news", {
                news: news
            });
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
};

exports.savenews = (req, res) => {
    let newsthread = new thread({
        name: req.body.name,
        message: req.body.message
    });
    newsthread
        .save()
        .then(() => {
            res.render("news");
        })
        .catch(error => {
            res.send(error);
        });
};