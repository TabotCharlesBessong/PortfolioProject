import axios from "axios";
import { server } from "../../server";
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILED,
  UPDATE_USER_ADDRESS_REQUEST,
  UPDATE_USER_ADDRESS_SUCCESS,
  UPDATE_USER_ADDRESS_FAILED,
  DELETE_USER_ADDRESS_REQUEST,
  DELETE_USER_ADDRESS_SUCCESS,
  DELETE_USER_ADDRESS_FAILED,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
} from "./actionTypes";


// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_SELLER_REQUEST,
    });
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch({
      type: LOAD_SELLER_SUCCESS,
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: LOAD_SELLER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// user update information
export const updateUserInformation = (name, email, phoneNumber, password) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_INFO_REQUEST,
    });

    const { data } = await axios.put(
      `${server}/user/update-user-info`,
      {
        email,
        password,
        phoneNumber,
        name,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Credentials": true,
        },
      }
    );

    dispatch({
      type: UPDATE_USER_INFO_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_INFO_FAILED,
      payload: error.response.data.message,
    });
  }
};

// update user address
export const updatUserAddress = (country, city, address1, address2, zipCode, addressType) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_ADDRESS_REQUEST,
    });

    const { data } = await axios.put(
      `${server}/user/update-user-addresses`,
      {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
      },
      { withCredentials: true }
    );

    dispatch({
      type: UPDATE_USER_ADDRESS_SUCCESS,
      payload: {
        successMessage: "User address updated successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_ADDRESS_FAILED,
      payload: error.response.data.message,
    });
  }
};

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_ADDRESS_REQUEST,
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: DELETE_USER_ADDRESS_SUCCESS,
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_ADDRESS_FAILED,
      payload: error.response.data.message,
    });
  }
};

// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USERS_REQUEST,
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAILED,
      payload: error.response.data.message,
    });
  }
};