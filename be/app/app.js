const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
    res.send("Hello World");
});

app.get("/favicon.ico", (req, res) => res.status(204));

app.use((req, res, next) => {
    next(createError(404));
});


app.use((err, req, res) => {
    console.error(err.stack);
    res.status(err.status || 500).send({
        message: err.message,
        error: err,
    });
});

module.exports = app;