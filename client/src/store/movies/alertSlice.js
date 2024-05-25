import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total_alert: [],
  loading: true,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertAction: (state, action) => {
      state.loading = false;
      state.total_alert = [
        ...state.total_alert,
        {
          title: action.payload.title,
          color: action.payload.color,
        },
      ];
    },
    deleteAlertAction: (state) => {
      state.total_alert = [];
    },
  },
});

export const { alertAction, deleteAlertAction } = alertSlice.actions;

export default alertSlice.reducer;
