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

app.get("/news", (req, res) =>{
    res.render("news")
})

app.get("/login", (req, res) =>{
    res.render("./login.ejs")
})
app.post("login", (req, res) =>{
})
app.get("/create", (req, res) =>{
    res.render("./create.ejs")
})
app.post("create", (req, res) =>{
})


app.listen(app.get("port"), () =>{
    console.log(`server http://localhost:${app.get("port")}`)
});