import { baseUrl } from '@/services/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('x-api-key', `${process.env.NEXT_PUBLIC_X_API_KEY}`);
      headers.set('x-client-id', `${process.env.NEXT_PUBLIC_X_CLIENT_ID}`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({}),
});
