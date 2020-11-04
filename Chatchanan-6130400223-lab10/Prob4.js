const cors = require("cors");
const app = require("express")().use(cors());
const request = require("request");
var resList = ``;

const googleMapURL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Khon%20Kaen&key=AIzaSyBFIggP1tDoMl-h35-OVgxMJjO140DZWLE";
request.get(googleMapURL, (err, res, body) => {
  if (err) return console.dir(err);
  const results = JSON.parse(body);
  results.results.forEach((result) => {
    resList += `<li>${result.name}</li>`;
  });
  
});

app.get("/", function (req, res) {
  res.send(`<body>
    <h1>Restaurants in Khon Kaen</h1>
    <ol id="restaurants">
    ${resList}
    </ol>
   </body>
   `);
});

app.listen(3000);
