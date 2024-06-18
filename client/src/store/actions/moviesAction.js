import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesAction = createAsyncThunk(
  "movies/listMovies",
  async ({ page = 1, keyword = "" }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `/api/v1/movie-test-project/movies?keyword=${keyword}&page=${page}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDetailsMovieAction = createAsyncThunk(
  "movies/movieById",
  async (slug, { rejectWithValue }) => {
    try {
      console.log(slug);

      const res = await axios.get(
        `/api/v1/movie-test-project/details_movie/${slug}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
