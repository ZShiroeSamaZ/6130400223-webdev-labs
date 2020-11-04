const cors = require("cors");
const app = require("express")().use(cors());
const request = require("request");
const url = "https://httpbin.org/ip";

var respones;
request.get(url, (err, res, body) => {
  respones = JSON.parse(body);
});

app.get("/ip", function (req, res) {
  res.send({ip: respones["origin"]});
});

app.listen(3000);
