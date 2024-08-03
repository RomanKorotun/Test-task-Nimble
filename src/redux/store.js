import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";

const rootReducer = {
  contacts: contactsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
