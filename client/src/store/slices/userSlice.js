import { createSlice } from "@reduxjs/toolkit";
import {
  sendMailAction,
  updateUserAction,
  verifyEmailAction,
} from "../actions/userAction";

const initialState = {
  getUser: {
    isLoading: false,
    isSuccess: false,
    message: null,
  },
  updateUser: {
    isLoading: false,
    isSuccess: false,
    message: null,
  },
  sendMail: {
    isLoading: false,
    isSuccess: false,
    message: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(getUserCurrentAction.pending, (state) => {
      //   state.getUser.isLoading = true;
      //   state.getUser.isSuccess = false;
      //   state.message = null;
      // })
      // .addCase(getUserCurrentAction.fulfilled, (state, action) => {
      //   state.getUser.isLoading = false;
      //   state.getUser.isSuccess = true;
      //   state.getUser.message = action.payload.msg;
      //   state.details_user = action.payload.user;
      // })
      // .addCase(getUserCurrentAction.rejected, (state, action) => {
      //   state.getUser.isLoading = false;
      //   state.getUser.isSuccess = false;
      //   state.getUser.message = action.payload.msg;
      // })
      .addCase(updateUserAction.pending, (state) => {
        state.updateUser.isLoading = true;
        state.updateUser.isSuccess = false;
        state.updateUser.message = null;
      })
      .addCase(updateUserAction.fulfilled, (state, action) => {
        state.updateUser.isLoading = false;
        state.updateUser.isSuccess = true;
        state.updateUser.message = action.payload.msg;
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        state.updateUser.isLoading = false;
        state.updateUser.isSuccess = false;
        state.updateUser.message = action.payload.msg;
      })
      .addCase(sendMailAction.pending, (state) => {
        state.sendMail.isLoading = true;
        state.sendMail.isSuccess = false;
        state.sendMail.message = null;
      })
      .addCase(sendMailAction.fulfilled, (state, action) => {
        state.sendMail.isLoading = false;
        state.sendMail.isSuccess = true;
        state.sendMail.message = action.payload.msg;
      })
      .addCase(sendMailAction.rejected, (state, action) => {
        state.sendMail.isLoading = false;
        state.sendMail.isSuccess = false;
        state.sendMail.message = action.payload.msg;
      })
      .addCase(verifyEmailAction.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(verifyEmailAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.msg;
      })
      .addCase(verifyEmailAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.msg;
      });
  },
});

export const { clearStateUserAction } = userSlice.actions;

export default userSlice.reducer;
