import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const { changeMode } = appSlice.actions;

export default appSlice.reducer;
