"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// getALl module
export const getAllAction = createAsyncThunk("products/list", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");

    return response.data.products;
  } catch (error) {
    // Thực hiện xử lý lỗi ở đây
    throw error;
  }
});
export const getByIdAction = createAsyncThunk(
  "products/detail",
  async (productId) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      return response.data; // Assuming the response has a "product" field for the single item
    } catch (error) {
      // Handle errors here
      throw error;
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: [],
    // totalPage: 0,
    dataUpdate: [],
    data: [],
  },
  extraReducers: (builder) => {
    //get all
    builder
      .addCase(getAllAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // get by id
    builder
      .addCase(getByIdAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getByIdAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataUpdate = action.payload;
      })
      .addCase(getByIdAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectProduct = (state) => state?.product;

export default productSlice.reducer;
