import { createSlice } from "@reduxjs/toolkit";
import {
  getDetailsMovieAction,
  getMoviesAction,
} from "../actions/moviesAction";

const initialState = {
  imagePath: "",
  getMovies: {
    movieListNew: [],
    isLoading: false,
    isSuccess: false,
    error: null,
    message: null,
    countTotalItems: 0,
    totalPage: 0,
  },
  getDetailsMovie: {
    detailsMovie: {},
    isLoading: false,
    error: null,
    message: null,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    imagePathAction: (state, action) => {
      state.imagePath = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAction.pending, (state) => {
        state.getMovies.isLoading = true;
        state.getMovies.isSuccess = false;
      })
      .addCase(getMoviesAction.fulfilled, (state, action) => {
        state.getMovies.movieListNew = action.payload.movies;
        state.getMovies.countTotalItems = action.payload.countTotalItems;
        state.getMovies.totalPage = action.payload.totalPage;
        state.getMovies.isLoading = false;
        state.getMovies.isSuccess = true;
      })
      .addCase(getMoviesAction.rejected, (state, action) => {
        state.getMovies.isLoading = false;
        state.getMovies.error = action.error;
        state.getMovies.isSuccess = false;
      })
      .addCase(getDetailsMovieAction.pending, (state) => {
        state.getDetailsMovie.isLoading = true;
      })
      .addCase(getDetailsMovieAction.fulfilled, (state, action) => {
        state.getDetailsMovie.isLoading = false;
        state.getDetailsMovie.detailsMovie = action.payload.details_movie;
      })
      .addCase(getDetailsMovieAction.rejected, (state, action) => {
        state.getDetailsMovie.isLoading = false;
        state.getDetailsMovie.error = action.error;
      });
  },
});

export const { imagePathAction } = moviesSlice.actions;

export default moviesSlice.reducer;
