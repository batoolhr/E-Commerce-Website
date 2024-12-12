import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState={
    cat:[],
 
}


const API_URL="http://localhost:3000"

export  const getCategories=createAsyncThunk('store/getCategories',async ()=>{
 try {
    const response = await axios.get(`${API_URL}/categories/list`);
    return response.data
 } catch (error) {
    console.error("Error fetching Categories:", error);
    throw error;
 }
})




const CategorySlice=createSlice({
    name:'Categories',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.cat=action.payload
        })
    }
 })
 export default CategorySlice