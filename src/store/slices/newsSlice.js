import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

// Async thunk for fetching
export const fetchLastestNews = createAsyncThunk("news/fetch", async () => {
  const response = await api.lastesNewsApi();
  return response;
});

// Functions for each state

const setPending = (state) => {
  state.status = "loading";
};

const setFulfilled = (state, action) => {
  state.status = "succeeded";
  state.items = action.payload;
};

const setRejected = (state, action) => {
  state.status = "failed";
  state.error = action.error.message;
};

//News Slice

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLastestNews.pending, setPending)
      .addCase(fetchLastestNews.fulfilled, setFulfilled)
      .addCase(fetchLastestNews.rejected, setRejected);
  },
});

export default newsSlice.reducer;
