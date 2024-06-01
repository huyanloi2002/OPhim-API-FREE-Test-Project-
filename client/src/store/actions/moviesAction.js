import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesAction = createAsyncThunk(
  "movies/listMovies",
  async ({ page = 1, keyword = "" }) => {
    const res = await axios.get(
      `/api/v1/movie-test-project/movies?keyword=${keyword}&page=${page}`
    );
    return res.data;
  }
);

export const getMovieByIdAction = createAsyncThunk(
  "movies/movieById",
  async (id) => {
    const res = await axios.get(`/api/v1/movie-test-project/movie_by_id/${id}`);
    return res.data;
  }
);

export const getMovieLikedAction = createAsyncThunk(
  "movies/likeMovie",
  async (id) => {
    const res = await axios.patch(
      `/api/v1/movie-test-project/like_movie/${id}`
    );
    return res.data;
  }
);
