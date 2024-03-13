import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import postSlice from "../features/post/postSlice";
import commentSlice from "../features/comment/commentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    post: postSlice,
    comment:commentSlice
  },
});
