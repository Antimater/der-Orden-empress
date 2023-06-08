'use strict';
const path = require('path');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//set current folder
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile("public/index.html", { root: __dirname });
});

app.get("/add", (req, res) => {
    res.send("Add Data");
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});