"use strict"

const thread = require("../models/news");
const study = require("../models/study");
const hobby = require("../models/hobby");
const chat = require("../models/chat");


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

//study

exports.savestudy = (req, res) => {
    let studythread = new study({
        name: req.body.name,
        message: req.body.message
    });
    studythread
        .save()
        .then(() => {
            res.render("study");
        })
        .catch(error => {
            res.send(error);
        });
};



//hobby
exports.savehobby = (req, res) => {
    let hobbythread = new hobby({
        name: req.body.name,
        message: req.body.message
    });
    hobbythread
        .save()
        .then(() => {
            res.render("hobby");
        })
        .catch(error => {
            res.send(error);
        });
};
//chat
exports.savechat = (req, res) => {
    let chatthread = new chat({
        name: req.body.name,
        message: req.body.message
    });
    chatthread
        .save()
        .then(() => {
            res.render("chat");
        })
        .catch(error => {
            res.send(error);
        });
};