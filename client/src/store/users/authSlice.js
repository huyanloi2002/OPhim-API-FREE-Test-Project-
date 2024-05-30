import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postDataAPI } from "../../utils/fetchData";

const initialState = {
  loading: false,
  user: null,
  access_token: null,
  message: null,
  success: false,
  isLogin: false,
  type: null,
};

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

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      (state.message = ""), (state.success = false), (state.type = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.type = "login";
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.message = action.payload.msg_vn;
        state.success = action.payload.success;
        state.isLogin = true;
        state.type = "login";
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg_vn;
        state.success = false;
        state.type = "login";
      })
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.type = "register";
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg_vn;
        state.success = action.payload.success;
        state.type = "register";
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload.msg_vn;
        state.type = "register";
      })
      .addCase(refreshTokenAction.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.type = "refresh_token";
      })
      .addCase(refreshTokenAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.message = action.payload.msg_vn;
        state.success = action.payload.success;
        state.isLogin = true;
        state.type = "refresh_token";
      })
      .addCase(refreshTokenAction.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload.msg_vn;
        state.type = "refresh_token";
      })
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.type = "logout";
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.isLogin = false;
        state.user = null;
        state.message = action.payload.msg_vn;
        state.type = "logout";
      })
      .addCase(logoutAction.rejected, (state) => {
        state.loading = false;
        state.success = false;
        state.type = "logout";
      });
  },
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
