import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../store/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
