import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "./searchResultsSlice";
import previousSearchesReducer from "./previousSearchesSlice";

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    previousSearches: previousSearchesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;