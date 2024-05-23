import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./base-blocks/user/userSlice";
import cartReducer from "./base-blocks/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
