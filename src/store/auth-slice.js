import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { token: null, uId: null, email: null },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUid(state, action) {
      state.uId = action.payload;
    },
    logout(state) {
      state.token = null;
      state.uId = null;
      state.email = null;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
