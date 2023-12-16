import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState={
    data:[],
    loading:false,
    error:'',
    limitData:[]
}

// export const getProducts=createAsyncThunk('store/getProducts',()=>{
//     return fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//     })
export const getProducts = createAsyncThunk('store/getProducts', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});
export const getLimitProducts = createAsyncThunk('store/getLimitProducts', async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=4');
      const data = await response.json();
      return data;
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
            console.log(state.data)
            state.error=''
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
        builder.addCase(getLimitProducts.fulfilled,(state,action)=>{
            state.limitData=action.payload
            console.log("SSS",action.payload)
            console.log("DATATTT",state.limitData)
        })
    }
})
export default ProductSlice 