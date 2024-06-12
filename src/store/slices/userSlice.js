import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signin, register } from '../../utils/auth'; 

// Thunks for async actions
export const signIn = createAsyncThunk('user/signIn', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await signin({ email, password });
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk('user/signUp', async (userData, { rejectWithValue }) => {
  try {
    const response = await register(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice for user state
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('jwt');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload;
        // Save the token to local storage
        if (action.payload.token) {
          localStorage.setItem('jwt', action.payload.token);
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = 'succeeded';
        // Handle sign-up success (e.g., show a success message or log in the user)
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
