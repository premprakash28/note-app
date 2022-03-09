import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    notesIsVisible: false,
    formIsVisible: true,
    notesId: null,
    catVis: null,
    catDisplay: false,
    categoryId: null,
    isLoaded: false,
    justPosted: false,
  },
  reducers: {
    toggleForm(state) {
      state.formIsVisible = true;
      state.notesIsVisible = false;
    },
    displayNotes(state) {
      state.formIsVisible = false;
      state.notesIsVisible = true;
    },
    setNotesId(state, action) {
      state.notesId = action.payload;
    },
    setCategoriesIsVisible(state) {
      state.catVis = !state.catVis;
    },
    setCatDisplay(state, action) {
      state.catDisplay = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setIsLoaded(state, action) {
      state.isLoaded = action.payload;
    },
    setJustPosted(state, action) {
      state.justPosted = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
