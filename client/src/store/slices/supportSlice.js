import { createSlice } from "@reduxjs/toolkit";
import { createSupportAction } from "../actions/supportAction";

const initialState = {
  isLoading: false,
  support: null,
  error: null,
  message: null,
};

const supportSlice = createSlice({
  name: "support",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSupportAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSupportAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.message = action.payload.msg_vn;
      })
      .addCase(createSupportAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.msg_vn;
        state.message = null;
      });
  },
});

export default supportSlice.reducer;
