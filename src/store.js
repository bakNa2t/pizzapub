import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./base-blocks/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
