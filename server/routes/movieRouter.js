const express = require("express");
const router = express.Router();
const {
  addMovie,
  getMovies,
  updateMovie,
} = require("../controller/movieController");

router.get("/movie", addMovie);
router.get("/movies", getMovies);
router.get("/update_movie", updateMovie);

module.exports = router;
