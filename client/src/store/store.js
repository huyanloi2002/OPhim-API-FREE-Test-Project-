import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../store/movies/moviesSlice";
import alertReducer from "./movies/alertSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    alert: alertReducer,
  },
});
