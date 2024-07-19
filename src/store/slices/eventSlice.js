import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../utils/api";


//Async Thunk for Fetching Popular Events
export const fetchPopularEvents = createAsyncThunk(
    "events/fetchPoularEvents",
    async () => {
        const response = await api.popularEventsApi();
        return response;
    }
);

//Async thunk for Fetching Upcoming Events
export const fetchUpcomingEvents = createAsyncThunk(
    "events/fetchUpcomingEvents",
    async () => {
        const response = await api.upcomingEventsApi();
        return response;
    }
);

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
  


//Event Slice

const eventSlice = createSlice({
    name: "event",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchPopularEvents.pending, setPending)
           .addCase(fetchPopularEvents.fulfilled, setFulfilled)
           .addCase(fetchPopularEvents.rejected, setRejected)
           .addCase(fetchUpcomingEvents.pending, setPending)
           .addCase(fetchUpcomingEvents.fulfilled, setFulfilled)
           .addCase(fetchUpcomingEvents.rejected, setRejected);
    }
});



export default eventSlice.reducer;