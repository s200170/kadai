const Thread = require("/models/thread");

exports.getAllThread = (req, res) =>{
    Thread.find({})
        .exec()
        .then(threaders =>{
            res.render("thread",{
                threaders: threaders
            });
        })
        .catch(error =>{
            console.log(error.message);
            return[];
        })
        .then(() =>{
            console.log("a");
        });
};
exports.getThreadPage = (req, res) =>{
    res.render("thread");
};

exports.saveThread = (req, res) => {
    let newThreader = new Thread({
        thread: req.body.thread,
        message: req.body.message
    });
    newThreader
        .save()
        .then(() =>{
            res.render("/");
        });
};