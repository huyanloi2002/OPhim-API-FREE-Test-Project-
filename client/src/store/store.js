import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import alertReducer from "./slices/alertSlice";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    alert: alertReducer,
    auth: authReducer,
    user: userReducer,
  },
});
