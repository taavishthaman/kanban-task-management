import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/appSlice";
import boardReducer from "./features/boards/boardSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    board: boardReducer,
  },
});

export default store;
