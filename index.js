//call express
const express = require("express");

//use express node.js webframework
const app = express();

//call http for server connection
const http = require("http");

//use http with express to make a "express server"
const connection = http.createServer(app);

app.get("/", (req, res) => {
    res.send("<h1> This is Node.js Server </h1>")
});

connection.listen(666, () => {
    console.log("SERVER 666 👿");
});