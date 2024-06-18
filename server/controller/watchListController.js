const Watch_List = require("../models/watchListModel");

const watchListController = {
  createWatchList: async (req, res) => {
    try {
      const user_id = req.user.id;

      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          msg: "Please enter name watchlist!",
          success: false,
        });
      }

      const newWatchList = new Watch_List({
        user_id,
        name,
      });

      await newWatchList.save();

      return res.status(200).json({
        msg: "Created a watch list successful!",
        success: true,
        newWatchList,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  addMovieToWatchList: async (req, res) => {
    try {
      const user_id = req.user.id;
      const watch_list_id = req.params.id;
      const movie_id = req.body.movie_id;

      const watch_list = await Watch_List.findOne({
        user_id,
        _id: watch_list_id,
      });

      if (!watch_list) {
        return res.status(400).json({
          msg: "Watch list is not found!",
          success: false,
        });
      }

      const isExist = watch_list.movies.find(
        (item) => JSON.stringify(item.movie_id) === JSON.stringify(movie_id)
      );

      if (isExist) {
        return res.status(400).json({
          msg: "Movie has been added!",
          success: false,
        });
      }

      watch_list.movies.push({ movie_id });

      const updateWatchList = await Watch_List.findByIdAndUpdate(
        watch_list_id,
        {
          movies: watch_list.movies,
        },
        { new: true }
      );

      return res.status(200).json({
        updateWatchList,
        msg: "Add a movie to watch list successful!",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  removeMovieFromWatchList: async (req, res) => {
    try {
      const user_id = req.user.id;
      const watch_list_id = req.params.id;
      const movie_id = req.body.movie_id;

      const watch_list = await Watch_List.findOne({
        user_id,
        _id: watch_list_id,
      });

      if (!watch_list) {
        return res.status(400).json({
          msg: "Watch list is not found!",
          success: false,
        });
      }

      const isExist = watch_list.movies.find(
        (item) => JSON.stringify(item.movie_id) === JSON.stringify(movie_id)
      );

      if (!isExist) {
        return res.status(400).json({
          msg: "Movie is not exist in watch list!",
          success: false,
        });
      }

      const removeMovie = watch_list.movies.filter(
        (item) => JSON.stringify(item.movie_id) !== JSON.stringify(movie_id)
      );

      const updateMovie = await Watch_List.findByIdAndUpdate(
        watch_list_id,
        {
          movies: removeMovie,
        },
        { new: true }
      );

      return res.status(200).json({
        updateMovie,
        msg: "Remove a movie from watch list successful!",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  deleteWatchList: async (req, res) => {
    try {
      const user_id = req.user.id;
      const watch_list_id = req.params.id;

      const watch_list = await Watch_List.findOne({
        user_id,
        _id: watch_list_id,
      });

      if (!watch_list) {
        return res.status(400).json({
          msg: "Watch list is not found!",
          success: false,
        });
      }

      await Watch_List.findByIdAndDelete(watch_list_id);

      return res.status(200).json({
        msg: "Deleted watch list successful!",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  attachWatchList: async (req, res) => {
    try {
      const user_id = req.user.id;
      const watch_list_id = req.params.id;

      const watch_list = await Watch_List.findOne({
        user_id,
        _id: watch_list_id,
      });

      if (!watch_list) {
        return res.status(400).json({
          msg: "Watch list is not found!",
          success: false,
        });
      }

      if (!watch_list.is_attach) {
        const updateAttach = await Watch_List.findByIdAndUpdate(
          watch_list_id,
          { is_attach: true },
          { new: true }
        );

        return res.status(200).json({
          updateAttach,
          msg: "Attached watch list!",
          success: true,
        });
      } else {
        const updateAttach = await Watch_List.findByIdAndUpdate(
          watch_list_id,
          { is_attach: false },
          { new: true }
        );

        return res.status(200).json({
          updateAttach,
          msg: "Unattached watch list!",
          success: true,
        });
      }
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  renameWatchList: async (req, res) => {
    try {
      const user_id = req.user.id;
      const watch_list_id = req.params.id;

      const watch_list = await Watch_List.findOne({
        user_id,
        _id: watch_list_id,
      });

      if (!watch_list) {
        return res.status(400).json({
          msg: "Watch list is not found!",
          success: false,
        });
      }

      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          msg: "Please enter name watchlist!",
          success: false,
        });
      }

      const renameWatchList = await Watch_List.findByIdAndUpdate(
        watch_list,
        {
          name,
        },
        { new: true }
      );

      return res.status(200).json({
        renameWatchList,
        msg: "Rename watch list successful!",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
};

module.exports = watchListController;
