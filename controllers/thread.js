"use strict";

const newsthread = require("../models/newsthread");

exports.getallnewsthread = (req, res) => {
    newsthread.find({})
        .exec()
        .then(newsthread => {
            res.render("newsthread", {
                newsthread: newsthread
            });
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
};

exports.getnewsPage = (req, res) => {
    res.render("news");
};

exports.savenews = (req, res) => {
    let thread = new newsthread({
        name: req.body.name,
        message: req.body.message
    });
    thread
        .save()
        .then(() => {
            res.render("news");
        })
        .catch(error => {
            res.send(error);
        });
};
