import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getSpecificCategory=createAsyncThunk('store/getSpecificCategory',async (Cat)=>{
    try {
        const response=await fetch(`https://fakestoreapi.com/products/category/${Cat}`)
        const cat=response.json()
        console.log("cat",cat)
        return cat
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