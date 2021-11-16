import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { GetNewsResult } from "../../services/api/types";

export interface SearchResultsState {
  searchKey: string;
  searchResults: GetNewsResult[];
}
export const initialState: SearchResultsState = {
  searchKey: "",
  searchResults: [],
}

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<GetNewsResult[]>) => {
      state.searchResults = action.payload;
    },
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
    searchResultsReset: () => initialState,
  },
});

export const {
  setSearchResults,
  setSearchKey,
  searchResultsReset,
} = searchResultsSlice.actions;

export const searchResults = (state: RootState): GetNewsResult[] => state.searchResults.searchResults;
export const searchKey = (state: RootState): string => state.searchResults.searchKey;

export default searchResultsSlice.reducer;