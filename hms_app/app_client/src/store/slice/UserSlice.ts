// redux/UserSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

// Define the User interface based on your provided structure

// Define the state structure
interface UserState {
  currentUser: User | null;
  loading: boolean;
}

// Initial state
const initialState: UserState = {
  currentUser: null,
  loading: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action for logging in, which expects a User payload
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    loginProgress: (state) => {
      state.loading = true;
    },
    loginFailure: (state) => {
      state.loading = false;
    },
    loginSuccess: (state) => {
      state.loading = false;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

// Export the actions
export const { login, loginProgress, loginFailure, logout, loginSuccess } =
  UserSlice.actions;

// Export the reducer
export default UserSlice.reducer;
