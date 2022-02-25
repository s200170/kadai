"use strict"

const express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express(),
    home = require("./controller/home");

app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))

//db
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/kadai",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
db.once("open", ()=>{
    console.log("using Mongoose");
});

//top
app.use(layouts);
app.get("/", (req, res) => {
    res.render("index")
})

//news
app.get("/news", home.news);


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


app.listen(app.get("port"), () =>{
    console.log(`server http://localhost:${app.get("port")}`)
});