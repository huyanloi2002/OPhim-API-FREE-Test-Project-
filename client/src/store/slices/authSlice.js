import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  registerAction,
  refreshTokenAction,
  logoutAction,
  getUserCurrentAction,
} from "../actions/authAction";

const initialState = {
  access_token: null,
  details_user: null,
  login: {
    isLoading: false,
    message: null,
    isSuccess: false,
  },
  register: {
    isLoading: false,
    message: null,
    isSuccess: false,
  },
  refresh_token: {
    isLoading: false,
    user: null,
    access_token: null,
    message: null,
    isSuccess: false,
  },
  logout: {
    isLoading: false,
    message: null,
    isSuccess: false,
  },
  getUser: {
    isLoading: false,
    message: null,
    isSuccess: false,
  },
};

const authSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.login.isLoading = true;
        state.login.isSuccess = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.login.isLoading = false;
        state.login.message = action.payload.msg_vn;
        state.login.isSuccess = action.payload.success;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.login.isLoading = false;
        state.login.message = action.payload.msg_vn;
        state.login.isSuccess = false;
      })
      .addCase(registerAction.pending, (state) => {
        state.register.isLoading = true;
        state.register.isSuccess = false;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.message = action.payload.msg_vn;
        state.register.isSuccess = action.payload.success;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isSuccess = false;
        state.register.message = action.payload.msg_vn;
      })
      .addCase(refreshTokenAction.pending, (state) => {
        state.refresh_token.isLoading = true;
        state.refresh_token.isSuccess = false;
      })
      .addCase(refreshTokenAction.fulfilled, (state, action) => {
        state.refresh_token.isLoading = false;
        state.access_token = action.payload.access_token;
        state.refresh_token.message = action.payload.msg_vn;
        state.refresh_token.isSuccess = action.payload.success;
      })
      .addCase(refreshTokenAction.rejected, (state, action) => {
        state.refresh_token.isLoading = false;
        state.refresh_token.isSuccess = false;
        state.refresh_token.message = action.payload.msg_vn;
      })
      .addCase(logoutAction.pending, (state) => {
        state.logout.isLoading = true;
        state.logout.isSuccess = false;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.logout.isLoading = false;
        state.logout.isSuccess = true;
        state.logout.message = action.payload.msg_vn;
        state.access_token = null;
        state.details_user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.logout.isLoading = false;
        state.logout.isSuccess = false;
      })
      .addCase(getUserCurrentAction.pending, (state) => {
        state.getUser.isLoading = true;
        state.getUser.isSuccess = false;
        state.message = null;
      })
      .addCase(getUserCurrentAction.fulfilled, (state, action) => {
        state.getUser.isLoading = false;
        state.getUser.isSuccess = true;
        state.getUser.message = action.payload.msg;
        state.details_user = action.payload.user;
      })
      .addCase(getUserCurrentAction.rejected, (state, action) => {
        state.getUser.isLoading = false;
        state.getUser.isSuccess = false;
        state.getUser.message = action.payload.msg;
      });
  },
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
