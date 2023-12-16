import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState={
    cat:[],
 
}
export  const getCategories=createAsyncThunk('store/getCategories',async ()=>{
 try {
    const response=await fetch('https://fakestoreapi.com/products/categories')
    const data=await response.json()
    return data
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
            console.log("state.cat", state.cat)
        })
    }
 })
 export default CategorySlice