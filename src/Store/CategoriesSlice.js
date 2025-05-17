import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

const initialState = {
  cat: [],
};

export const getCategories = createAsyncThunk(
  "store/getCategories",
  async () => {
    try {
      const response = await api.get("/categories/list");
      return response.data;
    } catch (error) {
      console.error("Error fetching Categories:", error);
      throw error;
    }
  }
);

const CategorySlice = createSlice({
  name: "Categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.cat = action.payload;
    });
  },
});

export default CategorySlice.reducer;
