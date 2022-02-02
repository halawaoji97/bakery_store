// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/member/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `landing-page`,
    }),
    getProductDetail: builder.query({
      query: (productId) => `detail-page/${productId}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailQuery } = productsApi;
