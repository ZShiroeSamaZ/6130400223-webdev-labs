const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const upload = multer();

const app = express();

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array())

const movies = require('./movie.js');
const router = require("./movie.js");

app.use('/movies', movies)

app.listen(3000)