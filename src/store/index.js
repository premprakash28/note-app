import uiSlice from "./ui-slice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import postSlice from "./post-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    post: postSlice.reducer,
  },
});

export default store;
