import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiKey: null,
  apiUrl: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.apiKey = action.payload.key;
      state.apiUrl = action.payload.url;
    },

    clearApiData: (state) => {
      state.apiKey = null;
      state.apiUrl = null;
    },
  },
});

export const {
  setApiData,
  clearApiData,
} = apiSlice.actions;

export default apiSlice.reducer;