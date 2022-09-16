// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { createSlice } from '@reduxjs/toolkit';
import {
  signupThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} from './authThunk';

// export const authApi = createApi({
//   reducerPath: 'contactsAuth',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   endpoints: builder => ({
//     contactsSignup: builder.mutation({
//       query: newUser => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: newUser,
//       }),
//     }),
//     contactsLogin: builder.mutation({
//       query: user => ({
//         url: '/users/login',
//         method: 'POST',
//         body: user,
//       }),
//     }),
//   }),
// });
// export const { useContactsLoginMutation, useContactsSignupMutation } = authApi;

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupThunk.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signupThunk.fulfilled]: (store, action) => {
      store.loading = false;
      store.user = action.payload.user;
      store.token = action.payload.token;
      store.isLoggedIn = true;
    },
    [signupThunk.rejected]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },
    [loginThunk.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [loginThunk.fulfilled]: (store, action) => {
      store.loading = false;
      store.user = action.payload.user;
      store.token = action.payload.token;
      store.isLoggedIn = true;
    },
    [loginThunk.rejected]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },
    [logoutThunk.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logoutThunk.fulfilled]: store => {
      return initialState;
    },
    [logoutThunk.rejected]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },
    [refreshThunk.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [refreshThunk.fulfilled]: (store, action) => {
      store.user = action.payload;
      store.isLoggedIn = true;
    },
    [logoutThunk.rejected]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },
  },
});
export const authReducer = authSlice.reducer;
