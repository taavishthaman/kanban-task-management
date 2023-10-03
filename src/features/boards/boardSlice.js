import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  selectedBoard: "",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoards(state, action) {
      state.boards = action.payload;
    },
    setSelectedBoard(state, action) {
      state.selectedBoard = action.payload;
    },
  },
});

export const { setBoards, setSelectedBoard } = boardSlice.actions;

export default boardSlice.reducer;
