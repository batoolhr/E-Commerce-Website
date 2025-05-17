import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
  limitData: [],
};

export const getProducts = createAsyncThunk("store/getProducts", async () => {
  try {
    const response = await api.get("/products/list");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
});

export const getLimitProducts = createAsyncThunk(
  "store/getLimitProducts",
  async () => {
    try {
      const response = await api.get("/products/limit");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(getLimitProducts.fulfilled, (state, action) => {
      state.limitData = action.payload;
    });
  },
});

export default ProductSlice.reducer;
