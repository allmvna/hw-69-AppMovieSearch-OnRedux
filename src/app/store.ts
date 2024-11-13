import { configureStore } from "@reduxjs/toolkit";
import { showReducer} from "../containers/slices/showSlice.ts";
import {showDetailsReducer} from "../containers/slices/showDetailsSlice.ts";

export const store = configureStore({
  reducer: {
    show: showReducer,
    showDetails: showDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
