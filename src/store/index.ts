import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "./searchResultsSlice";
import previousSearchesReducer from "./previousSearchesSlice";
import errorAlertReducer from "./errorAlertSlice";

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    previousSearches: previousSearchesReducer,
    errorAlert: errorAlertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;