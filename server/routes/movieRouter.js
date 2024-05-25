const express = require("express");
const router = express.Router();
const {
  addMovie,
  getMovies,
  updateMovie,
  likeMovie,
  getMovieById,
  getMoviesLiked,
} = require("../controller/movieController");

router.get("/movie", addMovie);
router.get("/movies", getMovies);
router.put("/update_movie", updateMovie);
router.patch("/like_movie/:id", likeMovie);
router.get("/movie_by_id/:id", getMovieById);
router.get("/movies_liked", getMoviesLiked);

module.exports = router;
