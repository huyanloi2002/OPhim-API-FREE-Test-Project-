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

      const movie = await apiFeatures.query;

      res.json({
        countTotalItems,
        totalPage: Math.ceil(countTotalItems / totalItems),
        countPageItems: movie.length,
        movie,
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
};

module.exports = movieController;
