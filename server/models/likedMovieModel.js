const mongoose = require("mongoose");

const likedMovieSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Liked_Movie", likedMovieSchema);
