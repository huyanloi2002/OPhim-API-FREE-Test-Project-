import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
};

export const fetchMovieApi = createAsyncThunk(
  "movies/listMovies",
  async ({ page = 1, keyword = "" }) => {
    console.log(page, keyword);
    const res = await axios.get(
      `/api/v1/movie-test-project/movies?keyword=${keyword}&page=${page}`
    );
    return res.data;
  }
);

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
      .addCase(fetchMovieApi.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchMovieApi.fulfilled, (state, action) => {
        state.movieListNew = action.payload.movie;
        state.countTotalItems = action.payload.countTotalItems;
        state.totalPage = action.payload.totalPage;
        state.loading = "fulfilled";
      })
      .addCase(fetchMovieApi.rejected, (state, action) => {
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
