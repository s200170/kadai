//foods
const foods = require("../models/foods");

exports.savefoods = (req, res) => {
    let foodsthread = new foods({
        name: req.body.name,
        message: req.body.message
    });
    foodsthread
        .save()
        .then(() => {
            res.render("foods");
        })
        .catch(error => {
            res.send(error);
        });
};