// store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin, register } from "@/utils/auth";

// Thunks for async actions
export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await signin({ email, password });
      console.log(response);
      return response; // Assuming response contains the token
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for user state
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    token: null, // Add a token field to store JWT
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem("jwt"); // Optionally remove from localStorage if stored there
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload.account;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload.data.account; // Set user info
        state.token = action.payload.data.token; // Set token
        localStorage.setItem("jwt", action.payload.data.token); // Optionally store the token in localStorage
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload.account;
        state.token = action.payload.token;
        localStorage.setItem("jwt", action.payload.token); // store the token in localStorage
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, setUserInfo } = userSlice.actions;
export default userSlice.reducer;

// Function to load user info and token from localStorage
export const loadUserInfo = () => (dispatch) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    // You could decode the token or fetch the user info from your API if necessary
    dispatch(setUserInfo({ token }));
  }
};

