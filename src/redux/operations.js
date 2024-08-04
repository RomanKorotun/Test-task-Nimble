import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

axios.defaults.headers.common.Authorization =
  "Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";

export const allContacts = createAsyncThunk(
  "contacts/allContacts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts?sort=created:desc");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkApi) => {
    try {
      const response = await axios.post("/contact", data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contact/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const oneGetContact = createAsyncThunk(
  "contact/oneGetContact",
  async (contactId, thunkApi) => {
    try {
      const response = await axios.get(`/contact/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contact/updateContact",
  async ({ contactId, tagsObj }, thunkApi) => {
    try {
      const response = await axios.put(`/contacts/${contactId}/tags`, tagsObj);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
