import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    data:[],
    loading:false,
    error:'',
    limitData:[]
}


const API_URL="http://localhost:3000"

export const getProducts = createAsyncThunk('store/getProducts', async () => {
    try {
        const response = await axios.get(`${API_URL}/products/list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

export const getLimitProducts = createAsyncThunk('store/getLimitProducts', async () => {
    try {
    const response=await axios.get(`${API_URL}/products/limit`)
      return response.data
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  });

const ProductSlice=createSlice({
    name:"products",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload
            state.error=''
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
        builder.addCase(getLimitProducts.fulfilled,(state,action)=>{
            state.limitData=action.payload
        })
    }
})
export default ProductSlice 