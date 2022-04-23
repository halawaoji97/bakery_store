// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://bakeryy.herokuapp.com/api/v1/member/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `landing-page`,
    }),
    getProductDetail: builder.query({
      query: (productId) => `detail-page/${productId}`,
    }),
    // create createOrder
    createOrder: builder.query({
      query: (order) => `order-page`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: (order) => JSON.stringify(order),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductDetailQuery,
  useCreateOrderQuery,
} = productsApi;
