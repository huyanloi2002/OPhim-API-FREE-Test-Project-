import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import alertReducer from "./alert/alertSlice";
import authReducer from "./users/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";

//Config redux persist:1
const rootReducer = combineReducers({
  movies: moviesReducer,
  alert: alertReducer,
  auth: authReducer,
});
//Config redux persist:2
const persistConfig = getPersistConfig({
  key: "root",
  storage,
  blacklist: ["auth.access_token", "auth._id"], //Ẩn đi access_token sử dụng redux deep persist
  rootReducer,
});
//Config redux persist:3
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //Tắt chức năng kiểm tra chuẩn hóa giá trị để không yêu cầu tự chuẩn hóa giạ trị lúc không cần thiết
    }),
});

export const persistor = persistStore(store);
