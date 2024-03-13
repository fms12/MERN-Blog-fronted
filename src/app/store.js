import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import postSlice from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    post: postSlice
  },
});
