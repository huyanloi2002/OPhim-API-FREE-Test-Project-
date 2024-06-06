import { createSlice } from "@reduxjs/toolkit";
import {
  updateUserAction,
  // verifyEmailAction,
  // sendMailAction,
} from "../actions/userAction";

const initialState = {
  error: null,
  type: null,
  // getUser: {
  //   isLoading: false,
  //   isSuccess: false,
  //   message: null,
  // },
  updateUser: {
    isLoading: false,
    isSuccess: false,
    message: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setErrorAction: (state, action) => {
      state.error = action.payload.error;
      state.type = action.payload.type;
    },
  },
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
      });
  },
});

export const { clearStateUserAction, setErrorAction } = userSlice.actions;

export default userSlice.reducer;
