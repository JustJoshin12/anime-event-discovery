import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "@/utils/api";
import { popularEventsCardData,popularEventsData } from '@/utils/popularEventsData';
import { eventInfoList } from '@/utils/eventInfoList';



// Async Thunk for Fetching Popular Events
export const fetchPopularEvents = createAsyncThunk(
    "events/fetchPopularEvents",
    async () => {
        const response = await api.popularEventsApi();
        return response;
    }
);

// Async thunk for Fetching Upcoming Events
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

const setFulfilledPopular = (state, action) => {
    state.status = "succeeded";
    state.popularItems = action.payload?.events;
};

const setFulfilledUpcoming = (state, action) => {
    state.status = "succeeded";
    state.upcomingItems = action.payload?.events;
};

const setRejected = (state, action) => {
    state.status = "failed";
    state.error = action.error.message;
};

// Event Slice
const eventSlice = createSlice({
    name: "event",
    initialState: {
        popularItems: popularEventsData,
        upcomingItems: popularEventsCardData,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularEvents.pending, setPending)
            .addCase(fetchPopularEvents.fulfilled, setFulfilledPopular)
            .addCase(fetchPopularEvents.rejected, setRejected)
            .addCase(fetchUpcomingEvents.pending, setPending)
            .addCase(fetchUpcomingEvents.fulfilled, setFulfilledUpcoming)
            .addCase(fetchUpcomingEvents.rejected, setRejected);
    }
});

export default eventSlice.reducer;

