import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface ErrorAlertState {
  errorAlert: string;
}

export const initialState: ErrorAlertState = {
  errorAlert: "",
}

export const errorAlertSlice = createSlice({
  name: "errorAlert",
  initialState,
  reducers: {
    setErrorAlert: (state, action: PayloadAction<string>) => {
      state.errorAlert = action.payload
    },
    setErrorAlertReset: () => initialState,
  },
});

export const {
  setErrorAlert,
  setErrorAlertReset,
} = errorAlertSlice.actions;

export const errorAlert = (state: RootState): string => state.errorAlert.errorAlert;

export default errorAlertSlice.reducer;