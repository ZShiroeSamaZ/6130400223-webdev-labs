const { request } = require("express");
const express = require("express");
const router = express.Router();
const movies = [
  { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 },
];

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id([0-9]{3,})", (req, res) => {
  var movieOutput;
  const id = req.params.id;

  movies.forEach((movie) => {
    if (movie.id == id) movieOutput = movie;
  });
  const outputMessage = movieOutput
    ? movieOutput
    : res.status(404) && { message: "Not Found" };
  res.json(outputMessage);
});

router.post("/", (req, res) => {
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9](\.[0-9]$)?$|10/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    const newId = movies[movies.length - 1].id + 1;
    movies.push({
      id: newId,
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
    });
    res.json({ message: "New movie created", location: "/movies/" + newId });
  }
});

router.put("/:id([0-9]{3,})", (req, res) => {
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9](\.[0-9]$)?$|10/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    var movieOutput;
    var newIndex = false;
    const id = req.params.id;
    movies.forEach((movie) => {
      if (movie.id == id) movieOutput = movie;
    });
    const index = movieOutput ? movies.indexOf(movieOutput) : (newIndex = true);
    if (newIndex) {
      movies.push({
        id: parseInt(id),
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating,
      });
      res.json({ message: "New movie created", location: "/movies/" + id });
    } else {
      movies[index] = {
        id: parseInt(id),
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating,
      };
      res.json({ message: "movie modified", location: "/movies/" + id });
    }
  }
});

router.delete("/:id([0-9]{3,})", (req, res) => {
  var index = null;
  const id = req.params.id;
  movies.forEach((movie) => {
    if (movie.id == id) index = movies.indexOf(movie);
  });
  if (index){
    movies.splice(index, 1);
    res.json({
      message: "movie deleted",
      location: "/movies/" + id,
    });
  }
  res.status(404).json({message:"movie not found"})
});

module.exports = router;
