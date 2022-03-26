"use strict";

const thread = require("../models/newsthread");


//news
exports.getallnewsthread = (req, res) => {
    thread.find({})
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
