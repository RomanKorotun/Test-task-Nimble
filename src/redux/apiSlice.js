import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";
const headers = {
  Authorization: "Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn",
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts?sort=created:desc",
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: "/contact",
        method: "POST",
        body: newContact,
      }),
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
        method: "DELETE",
      }),
    }),
    getContactById: builder.query({
      query: (contactId) => `/contact/${contactId}`,
    }),
    updateContact: builder.mutation({
      query: ({ contactId, tagsObj }) => ({
        url: `/contacts/${contactId}/tags`,
        method: "PUT",
        body: tagsObj,
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} = api;
