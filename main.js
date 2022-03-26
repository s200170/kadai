"use strict"

const express = require("express"),
    app = express(),
    error = require("./controllers/error"),
    home = require("./controllers/home"),
    thread = require("./controllers/thread"),
    layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/kadai",
    { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 5000);
app.use(
    express.urlencoded({
        extended:false
    })
);
app.use(express.json());
app.use(layouts);
//top
app.get("/", (req, res) => {
    res.render("index");
});


//news
app.get("/news", home.news);
app.get("/news", thread.getallnewsthread);
app.post("/news", thread.savenews);


//study
app.get("/study", home.study);

//foods
app.get("/foods", home.foods);

//hobby
app.get("/hobby", home.hobby);

//chat
app.get("/chat", home.chat);

//thread
app.get("/thread", home.thread);

//login
app.get("/login", home.login);

//account create
app.get("/create", home.create);

//error
app.use(error.Error);

app.listen(app.get("port"), () =>{
    console.log(`server http://localhost:${app.get("port")}`);
});