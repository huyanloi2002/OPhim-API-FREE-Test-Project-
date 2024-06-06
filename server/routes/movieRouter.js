const express = require("express");
const router = express.Router();
const {
  addMovie,
  getMovies,
  updateMovie,
  likeMovie,
  getMovieById,
  getMoviesLiked,
<<<<<<< HEAD
  addDetailsMovies,
=======
  addDetailsMovies
>>>>>>> 92c5db89cfbd6d34f65ae55604e0a1747fc2e502
} = require("../controller/movieController");

router.get("/movie", addMovie);
router.get("/movies", getMovies);
router.put("/update_movie", updateMovie);
router.patch("/like_movie/:id", likeMovie);
router.get("/movie_by_id/:id", getMovieById);
router.get("/movies_liked", getMoviesLiked);
router.post("/add_details_movies", addDetailsMovies);
<<<<<<< HEAD
=======

>>>>>>> 92c5db89cfbd6d34f65ae55604e0a1747fc2e502

module.exports = router;
