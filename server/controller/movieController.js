const Movie = require("../models/movieModel");
const axios = require("axios");
const APIFeatures = require("../utils/APIFeatures");
const countItemsQuery = require("../utils/countItemsQuery");

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

  getMovies: async (req, res) => {
    try {
      let totalItems = 24;
      const apiFeatures = new APIFeatures(Movie.find(), req.query)
        .search()
        .filter()
        .sort();

      const countTotalItems = await countItemsQuery(req.query);

      apiFeatures.pagination(totalItems);

      const movies = await apiFeatures.query;

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

  updateMovie: async (req, res) => {
    try {
      const movie = await Movie.find().sort({ modified: -1 });

      let listUpdate = [];
      for (let i = 1; i <= 3; i++) {
        const result = await axios.get(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${i}`
        );

        const items = result.data.items;
        items.map((item) => {
          listUpdate.push(item);
        });
      }

      const newMovieCurrent = new Date(movie[0].modified.time).getTime();

      for (let i = 0; i < listUpdate.length; i++) {
        let newMovieUpdate = new Date(listUpdate[i].modified.time).getTime();
        if (newMovieUpdate > newMovieCurrent) {
          await Movie.findByIdAndUpdate(
            { _id: listUpdate[i]._id },
            listUpdate[i],
            { upsert: true }
          );
        }
      }
      res.json({ msg: "Update success" });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },

  likeMovie: async (req, res) => {
    try {
      const { id } = req.params;

      const movie = await Movie.findById(id);

      if (!movie) {
        return res.status(400).json({
          msg: "Movie not found!",
          msg_vn: "Phim không tông tại!",
          success: false,
        });
      }

      const updateMovie = await Movie.findByIdAndUpdate(
        id,
        {
          is_like: !movie.is_like,
        },
        { new: true }
      );

      if (updateMovie.is_like) {
        res.status(200).json({
          msg: "Added movie to favorites.",
          msg_vn: "Đã thêm phim vào danh mục yêu thích",
          success: true,
          is_like: updateMovie.is_like,
        });
      } else {
        res.status(200).json({
          msg: "Removed movie to favorites.",
          msg_vn: "Đã xóa phim khỏi danh mục yêu thích",
          success: true,
          updateMovie,
          is_like: updateMovie.is_like,
        });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message, success: false });
    }
  },

  getMovieById: async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await Movie.findById(id);

      if (!movie) {
        return res.status(400).json({
          msg: "Movie not found!",
          msg_vn: "Phim không tông tại!",
          success: false,
        });
      }

      res.json({
        movie,
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },

  getMoviesLiked: async (req, res) => {
    try {
      const is_like = true;
      const moviesLiked = await Movie.find({ is_like });

      res.json({ moviesLiked });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
};
  addDetailsMovies: async (req, res) => {
    try {
      const movies = await Movie.find({}, { _id: 0, slug: 1 }).limit(31).skip(19969).sort({ modified: -1 });

      let moviesDetais = []
      for (let i = 0; i < 1000; i++) {
        const res = await axios.get(
          `https://ophim1.com/phim/${movies[i].slug}`
        );

        const result = res.data.movie

        const newDetails = {
          ...result,
          movie_id: result._id,
        }

        moviesDetais.push(newDetails)
      }

      const addDetailsMovie = await Details_Movie.insertMany(moviesDetais)
      if (addDetailsMovie) {
        res.json("Insert Success");
      } else {
        res.json("Insert Fail");
      }



    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false
      })
    }
  }
};

module.exports = movieController;
