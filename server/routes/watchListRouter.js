const express = require("express");
const router = express.Router();

const {
  createWatchList,
  addMovieToWatchList,
  removeMovieFromWatchList,
  deleteWatchList,
  attachWatchList,
  renameWatchList,
} = require("../controller/watchListController");

const { verifyToken } = require("../middleware/verifyToken");

router.post("/create_watch_list", verifyToken, createWatchList);
router.delete("/delete_watch_list/:id", verifyToken, deleteWatchList);
router.patch("/add_movie_to_watch_list/:id", verifyToken, addMovieToWatchList);
router.patch(
  "/remove_movie_from_watch_list/:id",
  verifyToken,
  removeMovieFromWatchList
);
router.patch("/attach_watch_list/:id", verifyToken, attachWatchList);
router.patch("/rename_watch_list/:id", verifyToken, renameWatchList);

module.exports = router;
