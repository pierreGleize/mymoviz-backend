var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

// const OWM_API_KEY = "36b33a58e4677ed2f59fd17f2d22f4dd"; ok
const api_key = process.env.OWM_API_KEY;

router.get("/movies", async (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    });
});

module.exports = router;
