import axios from "axios";
import { store } from "../store/store";
import { refreshTokenAction } from "../store/slices/authSlice";

const axiosJWT = axios.create({
  baseURL: "http://localhost:8000",
});

axiosJWT.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const token = state.auth.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

axiosJWT.interceptors.response.use(
  (response) => response,
  async (err) => {
    let originalRequest = err.config;
    if (
      err.response &&
      err.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const res = await store.dispatch(refreshTokenAction());
      if (res.payload.access_token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.payload.accessToken}`;
      }
      return axiosJWT(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default axiosJWT;
