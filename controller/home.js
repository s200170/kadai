"use strict"

exports.news = (req, res) => {
    res.render("news");
};
exports.study = (req, res) => {
    res.render("study");
};
exports.foods = (req, res) => {
    res.render("foods");
};
exports.hobby = (req, res) => {
    res.render("hobby");
};
exports.chat = (req, res) => {
    res.render("chat");
};
exports.thread = (req, res) => {
    res.render("thread");
};
exports.login = (req, res) => {
    res.render("login");
};
exports.create = (req, res) => {
    res.render("create");
};

