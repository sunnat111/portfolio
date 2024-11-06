import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const result = await axios.get(`
https://api.github.com/users/sunnat111/repos`);
    const data = result.data.products;

    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts: (state, action) => {
      state.items?.sort((a, b) => {
        if (a[action.payload] > b[action.payload]) {
          return 1;
        } else {
          return -1;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { sortProducts } = productSlice.actions;

export default productSlice.reducer;
