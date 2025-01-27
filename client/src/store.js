import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import adminReducer from "./features/admindata/adminSlice";
import chatReducer from "./features/chat/chatSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    chat: chatReducer,
  },
});
