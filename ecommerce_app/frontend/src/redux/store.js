import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import sellerReducer from "./reducers/seller.reducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer
  },
});

export default store;
