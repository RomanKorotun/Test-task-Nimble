import { createSlice } from "@reduxjs/toolkit";
import { addContact, allContacts, deleteContact } from "../operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(allContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(allContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.resources;
      })
      .addCase(allContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.data.ids[0]
        );
      }),
});

export const contactsReducer = contactsSlice.reducer;
