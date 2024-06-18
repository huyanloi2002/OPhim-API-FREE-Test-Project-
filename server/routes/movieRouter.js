const express = require("express");
const router = express.Router();
const {
  addMovie,
  getMovies,
  updateMovie,
  getDetailsMovie,
  addDetailsMovies,
  likeMovie,
  getLikedMovie,
} = require("../controller/movieController");

const { verifyToken } = require("../middleware/verifyToken");

router.get("/movies", getMovies);
router.get("/details_movie/:slug", getDetailsMovie);
router.get("/movie", addMovie);
router.put("/update_movie", updateMovie);
router.post("/add_details_movies", addDetailsMovies);
router.patch("/like_movie", verifyToken, likeMovie);
router.get("/liked_movie", verifyToken, getLikedMovie);

module.exports = router;
