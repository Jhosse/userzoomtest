import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { GetNews } from "../../services/api/types";

export interface PreviousSearchesState {
  previousSearches: GetNews[];
}

export const initialState: PreviousSearchesState = {
  previousSearches: [],
}

export const previousSearchesSlice = createSlice({
  name: "previousSearches",
  initialState,
  reducers: {
    setPreviousSearches: (state, action: PayloadAction<GetNews>) => {
      state.previousSearches.push(action.payload);
    },
    previousSearchesReset: () => initialState,
  },
});

export const {
  setPreviousSearches,
  previousSearchesReset,
} = previousSearchesSlice.actions;

export const previousSearches = (state: RootState): GetNews[] => state.previousSearches.previousSearches;

export default previousSearchesSlice.reducer;