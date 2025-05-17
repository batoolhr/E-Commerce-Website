import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const getSpecificCategory = createAsyncThunk(
  "store/getSpecificCategory",
  async (categoryName) => {
    try {
      console.log("Cat", categoryName);
      const response = await api.get(`/products/single/${categoryName}`);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching Categories:", error);
      throw error;
    }
  }
);

const initialState = {
  OneCategoryProduct: [],
};

const SpecificCategory = createSlice({
  name: "specificCategory",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSpecificCategory.fulfilled, (state, action) => {
      state.OneCategoryProduct = action.payload;
    });
  },
});

export default SpecificCategory.reducer;
