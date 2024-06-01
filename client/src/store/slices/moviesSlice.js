import { createSlice } from "@reduxjs/toolkit";
import {
  getMovieByIdAction,
  getMoviesAction,
  getMovieLikedAction,
} from "../actions/moviesAction";

const initialState = {
  imagePath: "",
  pagination: {},
  movieDetails: {},
  statusMovieDetails: false,
  countTotalItems: 0,
  totalPage: 0,
  movieListNew: [],
  loading: "",
  error: null,
  message: "",
  is_like: false,
  movieById: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    imagePathAction: (state, action) => {
      state.imagePath = action.payload;
    },
    paginationAction: (state, action) => {
      state.pagination = action.payload;
    },
    movieDetailsAction: (state, action) => {
      state.movieDetails = action.payload;
      state.statusMovieDetails = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAction.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMoviesAction.fulfilled, (state, action) => {
        state.movieListNew = action.payload.movies;
        state.countTotalItems = action.payload.countTotalItems;
        state.totalPage = action.payload.totalPage;
        state.loading = "fulfilled";
      })
      .addCase(getMoviesAction.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error;
      })
      .addCase(getMovieLikedAction.pending, (state) => {
        state.loading = "pending/like";
      })
      .addCase(getMovieLikedAction.fulfilled, (state, action) => {
        state.loading = "fulfilled/like";
        state.message = action.payload.msg_vn;
        state.is_like = action.payload.is_like;
      })
      .addCase(getMovieLikedAction.rejected, (state, action) => {
        state.loading = "rejected/like";
        state.error = action.error;
      })
      .addCase(getMovieByIdAction.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMovieByIdAction.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.movieById = action.payload.movie;
      })
      .addCase(getMovieByIdAction.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error;
      });
  },
});

export const {
  imagePathAction,
  paginationAction,
  movieDetailsAction,
  searchAction,
  pageAction,
} = moviesSlice.actions;

export default moviesSlice.reducer;
