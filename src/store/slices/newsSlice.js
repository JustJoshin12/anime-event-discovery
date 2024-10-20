import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { animeNews } from "@/utils/animeNews";
import { latestNewsApi } from "@/utils/api"

// Async thunk for fetching
export const fetchLastestNews = createAsyncThunk("news/fetch", async () => {
  const response = await latestNewsApi();
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
    lastestNewsItems: animeNews,
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
