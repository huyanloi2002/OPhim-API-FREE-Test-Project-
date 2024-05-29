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
  message: "",
  is_like: false,
  movieById: {},
};

export const fetchMovieApi = createAsyncThunk(
  "movies/listMovies",
  async ({ page = 1, keyword = "" }) => {
    const res = await axios.get(
      `/api/v1/movie-test-project/movies?keyword=${keyword}&page=${page}`
    );
    return res.data;
  }
);

export const movieByIdApi = createAsyncThunk("movies/movieById", async (id) => {
  const res = await axios.get(`/api/v1/movie-test-project/movie_by_id/${id}`);
  return res.data;
});

export const likeMovieApi = createAsyncThunk("movies/likeMovie", async (id) => {
  const res = await axios.patch(`/api/v1/movie-test-project/like_movie/${id}`);
  return res.data;
});

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
        state.movieListNew = action.payload.movies;
        state.countTotalItems = action.payload.countTotalItems;
        state.totalPage = action.payload.totalPage;
        state.loading = "fulfilled";
      })
      .addCase(fetchMovieApi.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error;
      })
      .addCase(likeMovieApi.pending, (state) => {
        state.loading = "pending/like";
      })
      .addCase(likeMovieApi.fulfilled, (state, action) => {
        state.loading = "fulfilled/like";
        state.message = action.payload.msg_vn;
        state.is_like = action.payload.is_like;
      })
      .addCase(likeMovieApi.rejected, (state, action) => {
        state.loading = "rejected/like";
        state.error = action.error;
      })
      .addCase(movieByIdApi.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(movieByIdApi.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.movieById = action.payload.movie;
      })
      .addCase(movieByIdApi.rejected, (state, action) => {
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
