import axios from "axios";
import { server } from "../../server";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_SELLERS_REQUEST } from "./actionTypes/seller.action.type";


export const getAllSellers = createAsyncThunk(
  "seller/getAllSellers",
  async (_, { dispatch }) => {
    try {
      dispatch({ type: GET_ALL_SELLERS_REQUEST });
      const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
        withCredentials: true,
      });
      return data.sellers;
    } catch (error) {
      return error.response.data.message;
    }
  }
);
