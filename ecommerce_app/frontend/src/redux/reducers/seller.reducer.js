import { createReducer } from "@reduxjs/toolkit";
import { GET_ALL_SELLERS_FAILED, GET_ALL_SELLERS_REQUEST, GET_ALL_SELLERS_SUCCESS } from "../actions/actionTypes/seller.action.type";


const initialState = {
  isLoading: true,
  sellers: [],
  error: null,
};

const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_ALL_SELLERS_REQUEST, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(GET_ALL_SELLERS_SUCCESS, (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    })
    .addCase(GET_ALL_SELLERS_FAILED, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});

export default sellerReducer;
