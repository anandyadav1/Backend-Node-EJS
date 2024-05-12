

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Serving static files
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home"); // ".ejs" extension is not required here
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram", { data });
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", { diceVal });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});