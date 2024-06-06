import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataAPI, postDataAPI } from "../../utils/fetchData";

export const createSupportAction = createAsyncThunk(
  "support/createSupport",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postDataAPI(
        "/create_support",
        data.support,
        data.token
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMySupportAction = createAsyncThunk(
  "support/getMySupport",
  async (token, { rejectWithValue }) => {
    try {
      const res = await getDataAPI("/get_my_support", token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
