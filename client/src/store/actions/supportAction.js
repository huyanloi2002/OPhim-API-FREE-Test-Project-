import { createAsyncThunk } from "@reduxjs/toolkit";
import { postDataAPI } from "../../utils/fetchData";

export const createSupportAction = createAsyncThunk(
  "support/createSupport",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postDataAPI("/create_support", data.support, data.toke);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
