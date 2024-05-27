import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import alertReducer from "./alert/alertSlice";
import authReducer from "./users/authSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    alert: alertReducer,
    auth: authReducer,
  },
});
