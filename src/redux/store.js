import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { contactReducer } from "./contact/contactSlice";

const rootReducer = {
  contacts: contactsReducer,
  contact: contactReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
