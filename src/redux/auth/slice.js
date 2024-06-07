import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  refreshUserThunk,
  logOutThunk,
  logInThunk,
} from './operations';
import toast from 'react-hot-toast';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('You have your own account now!');
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('You are logged in now!');
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success('You are logged out now!');
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected
        ),
        (state) => {
          toast.error('Something went wrong, try again!');
        }
      );
  },
});

export const authReducer = authSlice.reducer;
