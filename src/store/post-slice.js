import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: { notes: null, categories: null },
  reducers: {
    setPost(state, action) {
      state.notes = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
