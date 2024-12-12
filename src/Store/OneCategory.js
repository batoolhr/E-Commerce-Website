import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"




const API_URL="http://localhost:3000"
export const getSpecificCategory=createAsyncThunk('store/getSpecificCategory',async (categoryName)=>{
    try {
        console.log("Cat",categoryName)
        const response=await axios.get(`${API_URL}/products/single/${categoryName}`)

        console.log("response",response)
        return response.data
    } catch (error) {
        console.error("Error fetching Categories:", error);
        throw error;
    }
})

const initialState={
    OneCategoryProduct:[]
}

const SpecificCategory= createSlice({
    name:'specificCategory',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getSpecificCategory.fulfilled,(state,action)=>{
            state.OneCategoryProduct=action.payload
        })
    }
})
export default SpecificCategory