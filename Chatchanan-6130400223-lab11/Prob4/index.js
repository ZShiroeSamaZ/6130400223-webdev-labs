const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://user12345678:user12345678@cluster0.pggaz.mongodb.net/<dbname>?retryWrites=true&w=majority&useUnifiedTopology=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
var data;

function getData() {
  client.connect(async (err) => {
    await client
      .db("lab11")
      .collection("data")
      .find({})
      .toArray((err, result) => {
        return (data = result);
      });
  });
}

function sendNewData(newData) {
  client.connect(async (err) => {
    await client
      .db("lab11")
      .collection("data")
      .insertOne(
        { date: newData.date, activity: newData.task },
        (err, res) => {}
      );
  });
}

function delAllData() {
  client.connect(async (err) => {
    await client
      .db("lab11")
      .collection("data")
      .deleteMany({});
  });
}

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static("public"));



app.get("/", (req, res) => {
  getData();
  setTimeout(() => {
    res.render("form", { data });
  }, 500);
  
});

app.set("view engine", "pug");
app.set("views", "./views");

app.post("/", async (req, res) => {
  newData = req.body;
  await sendNewData(newData);
  res.redirect("/");
  
});

app.post("/delete", async (req, res) => {
  await delAllData()
  res.redirect("/");
});

app.listen(3000);
