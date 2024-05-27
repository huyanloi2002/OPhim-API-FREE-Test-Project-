import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postDataAPI } from "../../utils/fetchApi";

const initialState = {
  loading: false,
  user: {},
  message: "",
  success: false,
  type: "",
  nameValue: "",
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postDataAPI("/login", data);
      localStorage.setItem("firstLogin", true);
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

const authSlice = createSlice({
  name: "user",
  initialState,
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
        state.message = action.payload.msg_vn;
        state.success = action.payload.success;
        state.type = "login";
        state.nameValue = action.payload.nameValue;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg_vn;
        state.nameValue = action.payload.nameValue;
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
        state.nameValue = action.payload.nameValue;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload.msg_vn;
        state.type = "register";
        state.nameValue = action.payload.nameValue;
      });
  },
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
