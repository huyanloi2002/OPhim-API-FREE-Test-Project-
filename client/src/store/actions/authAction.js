import { createAsyncThunk } from "@reduxjs/toolkit";
import { postDataAPI } from "../../utils/fetchData";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postDataAPI("/login", data);
      return res.data;
    } catch (err) {
      // Return custom error message
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postDataAPI("/register", data);
      return res.data;
    } catch (err) {
      // Return custom error message
      return rejectWithValue(err.response.data);
    }
  }
);

export const refreshTokenAction = createAsyncThunk(
  "auth/refresh_token",
  //Thêm _ trước rehectWithValue để có thể thay thế cho dữ liệu truyền vaò để có thể dùng rejectWithValue được
  async (_, { rejectWithValue }) => {
    try {
      const res = await postDataAPI("/refresh_token");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await postDataAPI("/logout");
      return res.data;
    } catch (err) {
      // Return custom error message
      return rejectWithValue(err.response.data);
    }
  }
);
