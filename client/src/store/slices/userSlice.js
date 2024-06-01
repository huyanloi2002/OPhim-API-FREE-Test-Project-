import { createSlice } from "@reduxjs/toolkit";
import { getLoginHistoryAction } from "../actions/userAction";

const initialState = {
  loading: false,
  login_history: null,
  success: false,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLoginHistoryAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoginHistoryAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.msg;
        state.login_history = action.payload.login_history;
      })
      .addCase(getLoginHistoryAction.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload.msg;
        state.login_history = null;
      });
  },
});

export default userSlice.reducer;
