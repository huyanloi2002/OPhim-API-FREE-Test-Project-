const mongoose = require("mongoose");

const detailsMovieSchema = new mongoose.Schema({
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  tmdb: {
    type: mongoose.Schema.Types.Mixed,
  },
  imdb: {
    type: mongoose.Schema.Types.Mixed,
  },
  created: {
    type: mongoose.Schema.Types.Mixed,
  },
  modified: {
    type: mongoose.Schema.Types.Mixed,
  },
  content: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
  },
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  origin_name: {
    type: String,
  },
  thumb_url: {
    type: String,
  },
  poster_url: {
    type: String,
  },
  is_copyright: {
    type: Boolean,
  },
  sub_docquyen: {
    type: Boolean,
  },
  chieurap: {
    type: Boolean,
  },
  trailer_url: {
    type: String,
  },
  time: {
    type: String,
  },
  episode_current: {
    type: String,
  },
  episode_total: {
    type: String,
  },
  quality: {
    type: String,
  },
  lang: {
    type: String,
  },
  notify: {
    type: String,
  },
  showtimes: {
    type: String,
  },
  view: {
    type: Number,
  },
  year: {
    type: Number,
  },
  actor: {
    type: Array,
  },
  director: {
    type: Array,
  },
  category: {
    type: Array,
  },
  country: {
    type: Array,
  },
});

module.exports = mongoose.model("Details_Movie", detailsMovieSchema);
