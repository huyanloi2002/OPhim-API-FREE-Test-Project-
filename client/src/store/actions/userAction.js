import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataAPI } from "../../utils/fetchData";

export const getLoginHistoryAction = createAsyncThunk(
  " user/loginHistory",
  async (token, { rejectWithValue }) => {
    try {
      const res = await getDataAPI("/login_history", token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
