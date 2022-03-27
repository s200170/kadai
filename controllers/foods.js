//foods
const foods = require("../models/foods");


exports.getallfoodsthread = (req, res) => {
    foods.find({})
        .exec()
        .then(foods => {
            res.render("foods", {
                foods: foods
            });
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
};
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