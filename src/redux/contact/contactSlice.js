import { createSlice } from "@reduxjs/toolkit";
import { oneGetContact, updateContact } from "../operations";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    item: null,
  },
  extraReducers: (build) =>
    build
      .addCase(oneGetContact.fulfilled, (state, action) => {
        state.item = action.payload.resources[0];
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.item = action.payload;
      }),
});

export const contactReducer = contactSlice.reducer;
