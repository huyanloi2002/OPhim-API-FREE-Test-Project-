const Movie = require("../models/movieModel");
const axios = require("axios");
const APIFeatures = require("../utils/APIFeatures");
const countItemsQuery = require("../utils/countItemsQuery");
const Details_Movie = require("../models/detailsMovieModel");
const Liked_Movie = require("../models/likedMovieModel");

const movieController = {
  addMovie: async (req, res) => {
    try {
      const result = await axios.get(
        "https://ophim1.com/danh-sach/phim-moi-cap-nhat"
      );

      const totalPages = result.data.pagination.totalPages;

      const movies = await Movie.find();

      let listMovies = [];

      for (let i = 1; i < totalPages; i++) {
        const result = await axios.get(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${i}`
        );

        const items = result.data.items;
        items.map((item) => {
          listMovies.push(item);
        });
      }

      const movie = await Movie.insertMany(listMovies);
      if (movie) {
        res.json("Insert Success");
      } else {
        res.json("Insert Fail");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateMovie: async (req, res) => {
    try {
      const movie = await Movie.find().sort({ modified: -1 });

      let listUpdate = [];
      for (let i = 1; i <= 5; i++) {
        const result = await axios.get(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${i}`
        );

        const items = result.data.items;
        items.map((item) => {
          listUpdate.push(item);
        });
      }

      const newMovieCurrent = new Date(movie[0].modified.time).getTime();
      // let listNewMovie = [];
      for (let i = 0; i < listUpdate.length; i++) {
        let newMovieUpdate = new Date(listUpdate[i].modified.time).getTime();
        if (newMovieUpdate > newMovieCurrent) {
          await Movie.findByIdAndUpdate(
            { _id: listUpdate[i]._id },
            listUpdate[i],
            { upsert: true }
          );
          const res = await axios.get(
            `https://ophim1.com/phim/${listUpdate[i].slug}`
          );
          const details = res.data.movie;
          await Details_Movie.findByIdAndUpdate(
            { _id: listUpdate[i]._id },
            { ...details, movie_id: listUpdate[i]._id },
            { upsert: true }
          );
          // listNewMovie.push(listUpdate[i]);
        }
      }
      // res.json(listNewMovie.length);
      res.json({ msg: "Update success" });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
  addDetailsMovies: async (req, res) => {
    try {
      const movies = await Movie.find({}, { _id: 0, slug: 1 })
        .limit(50)
        .skip(21850)
        .sort({ modified: -1 });

      let moviesDetais = [];
      for (let i = 0; i < 50; i++) {
        const res = await axios.get(
          `https://ophim1.com/phim/${movies[i].slug}`
        );

        const result = res.data.movie;

        const newDetails = {
          ...result,
          movie_id: result._id,
        };

        moviesDetais.push(newDetails);
      }

      const addDetailsMovie = await Details_Movie.insertMany(moviesDetais);
      if (addDetailsMovie) {
        res.json("Insert Success");
      } else {
        res.json("Insert Fail");
      }
      // res.json(movies[0]);
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getMovies: async (req, res) => {
    try {
      let totalItems = 24;
      const apiFeatures = new APIFeatures(Movie.find(), req.query)
        .search()
        .filter()
        .sort();

      const countTotalItems = await countItemsQuery(req.query);

      apiFeatures.pagination(totalItems);

      const list_movies = await apiFeatures.query;

      let movies = [];
      for (let i = 0; i < list_movies.length; i++) {
        const details = await Details_Movie.findOne({
          movie_id: list_movies[i]._id,
        });

        movies.push({
          ...list_movies[i]._doc,
          episode_current: details.episode_current,
          quality: details.quality,
        });
      }

      res.json({
        countTotalItems,
        totalPage: Math.ceil(countTotalItems / totalItems),
        countPageItems: movies.length,
        movies,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
  getDetailsMovie: async (req, res) => {
    try {
      const { slug } = req.params;
      const details_movie = await Details_Movie.findOne({ slug: slug });

      if (!details_movie) {
        return res.status(400).json({
          msg: "Movie not found!",
          msg_vn: "Phim không tông tại!",
          success: false,
        });
      }

      res.json({
        details_movie,
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
  likeMovie: async (req, res) => {
    try {
      const user_id = req.user.id;
      const movie_id = req.body.movie_id;

      const like_movies = await Liked_Movie.findOne({ user_id, movie_id });

      if (!like_movies) {
        const likeMovie = new Liked_Movie({
          user_id,
          movie_id,
        });

        await likeMovie.save();

        return res.status(200).json({
          msg: "Add a movie to favorite!",
          success: true,
        });
      } else {
        await Liked_Movie.findByIdAndDelete(like_movies._id);

        return res.status(200).json({
          msg: "Remove a movie from favorite!",
          success: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message, success: false });
    }
  },
  getLikedMovie: async (req, res) => {
    try {
      const user_id = req.user.id;

      const liked_movies = await Liked_Movie.find({ user_id }).populate(
        "movie_id"
      );

      res.json({
        liked_movies,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
};

module.exports = movieController;
