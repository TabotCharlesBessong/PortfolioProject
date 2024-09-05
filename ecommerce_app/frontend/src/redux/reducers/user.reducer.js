import { createReducer } from "@reduxjs/toolkit";
import { DELETE_USER_ADDRESS_FAILED, DELETE_USER_ADDRESS_REQUEST, DELETE_USER_ADDRESS_SUCCESS, GET_ALL_USERS_FAILED, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, UPDATE_USER_ADDRESS_FAILED, UPDATE_USER_ADDRESS_REQUEST, UPDATE_USER_ADDRESS_SUCCESS, UPDATE_USER_INFO_FAILED, UPDATE_USER_INFO_REQUEST, UPDATE_USER_INFO_SUCCESS } from "../actions/actionTypes/user.action.types";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOAD_USER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOAD_USER_SUCCESS, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(LOAD_USER_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase(UPDATE_USER_INFO_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(UPDATE_USER_INFO_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(UPDATE_USER_INFO_FAILED, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(UPDATE_USER_ADDRESS_REQUEST, (state) => {
      state.addressloading = true;
    })
    .addCase(UPDATE_USER_ADDRESS_SUCCESS, (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase(UPDATE_USER_ADDRESS_FAILED, (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })
    .addCase(DELETE_USER_ADDRESS_REQUEST, (state) => {
      state.addressloading = true;
    })
    .addCase(DELETE_USER_ADDRESS_SUCCESS, (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase(DELETE_USER_ADDRESS_FAILED, (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })
    .addCase(GET_ALL_USERS_REQUEST, (state) => {
      state.usersLoading = true;
    })
    .addCase(GET_ALL_USERS_SUCCESS, (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    })
    .addCase(GET_ALL_USERS_FAILED, (state, action) => {
      state.usersLoading = false;
      state.error = action.payload;
    })
    // .addCase(clearErrors, (state) => {
    //   state.error = null;
    // })
    // .addCase(clearMessages, (state) => {
    //   state.successMessage = null;
    // });
});
