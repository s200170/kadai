"use strict"

const express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))

app.use(layouts);
app.get("/", (req, res) => {
    res.render("index")
})
//news
app.get("/news", (req, res) =>{
    res.render("news")
})
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
//login
app.get("/login", (req, res) =>{
    res.render("./login.ejs")
})
app.post("login", (req, res) =>{
})

//account create
app.get("/create", (req, res) =>{
    res.render("./create.ejs")
})
app.post("create", (req, res) =>{
})


app.listen(app.get("port"), () =>{
    console.log(`server http://localhost:${app.get("port")}`)
});