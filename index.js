//call express
const express = require("express");

//use express node.js webframework
const app = express();

//call http for server connection
const http = require("http");
const {response} = require("express");

//use http with express to make a "express server"
const connection = http.createServer(app);

app.get("/", (req, res) => {
    res.send("<h1> This is Node.js Server </h1>")
});

app.get("/homePage", (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
});

connection.listen(777, () => {
    console.log("SERVER 777 ");
});