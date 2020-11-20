const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();

app.get("/", (req, res) => {
  res.render("form");
});

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static("public"));

app.post("/", (req, res) => {
  data = req.body
  res.send(`<p style="font-size:2rem"><b>${data.Name}</b> used these following skills:<b>${data.Skill}</b> while doing internship at <b>${data.Internship}</b></p>`);
});

app.listen(3000);
