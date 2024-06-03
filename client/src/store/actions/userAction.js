import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataAPI, patchDataAPI } from "../../utils/fetchData";

export const updateUserAction = createAsyncThunk(
  "user/updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await patchDataAPI("/update_user", data.update, data.token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyEmailAction = createAsyncThunk(
  "user/verifyEmail",
  async (data, { rejectWithValue }) => {
    try {
      const res = await patchDataAPI(
        "/verify_email",
        { otp: data.otp },
        data.token
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyIdentifyAction = createAsyncThunk(
  "user/verifyIdentify",
  async (data, { rejectWithValue }) => {
    try {
      const res = await patchDataAPI(
        "/verify_identify",
        { number_identify: data.number_identify },
        data.token
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendMailAction = createAsyncThunk(
  "user/sendMail",
  async (data, { rejectWithValue }) => {
    try {
      const res = await getDataAPI("/send_email", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
