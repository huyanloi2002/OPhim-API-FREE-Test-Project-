const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    modified: {
      time: Date,
    },
    name: String,
    slug: String,
    origin_name: String,
    thumb_url: String,
    poster_url: String,
    year: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
