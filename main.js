"use strict"

const express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))

//db
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/thread",
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
app.get("/news", (req, res) =>{
    res.render("news")
});

//study
app.get("/study", (req, res) =>{
    res.render("study")
})

//foods
app.get("/foods", (req, res) =>{
    res.render("foods")
})

//hobby
app.get("/hobby", (req, res) =>{
    res.render("hobby")
})

//chat
app.get("/chat", (req, res) =>{
    res.render("chat")
})

//thread
app.get("/thread", (req, res) =>{
    res.render("./thread")
})

//login
app.get("/login", (req, res) =>{
    res.render("./login")
})

//account create
app.get("/create", (req, res) =>{
    res.render("./create")
})


app.listen(app.get("port"), () =>{
    console.log(`server http://localhost:${app.get("port")}`)
});