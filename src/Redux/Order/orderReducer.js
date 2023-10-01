import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    orders: [],       // Array to store orders
    loading: false,   // Indicates if orders are being fetched
    error: null,      // Stores any error that occurs during fetching
    page: 1,          // Current page
    pageSize: 10,     // Number of records per page
    totalPages: 1,    // Total pages
    totalOrders: 0,   // Total number of orders
  };
  export const getOrderReducer = createReducer(
    {},
    {
      allOrderRequest: (state) => {
        state.loading = true;
        state.orders = [];
      },
      allOrderSuccess: (state = { orders: [] }, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.totalPages= action.payload.totalPages;
        state.totalOrders= action.payload.totalOrders;
      },
      allOrderFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
  );