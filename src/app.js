const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser("json/urlencoded"));

app.get("/helloworld", (req, res) => {
    console.log("-> get /helloworld");
    res.send("Hola Mundo");
})

app.post("/", (req, res) => {
    console.log("-> post /");
    console.log("body: ", req.body);
    return res.send(req.body.challenge);
})

module.exports = app;