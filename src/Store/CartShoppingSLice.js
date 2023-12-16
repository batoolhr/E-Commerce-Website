import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [], // Corrected property name
  totalPrice:0
};

const CartShoppingSlice = createSlice({
  name: 'cartShopping',
  initialState,
  reducers: {
    addTolist: (state, action) => {
      const existingItem=state.cartList.find((item)=>item.id===action.payload.id)
      if(existingItem){
        existingItem.quantity+=1
      }
      else
      {
        state.cartList.push({...action.payload,quantity:1}); // Corrected property name
        state.totalPrice+=Math.round(action.payload.price)
      }
    },
    IncreaseQuanity:(state,action)=>{
      const { id } = action.payload;
      const existingItem = state.cartList.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice+=Math.round(existingItem.price)
        // existingItem.price=state.cartList.price*existingItem.quantity
      }
    },
    DecreaseQuanity:(state,action)=>{
      const { id } = action.payload;
      const existingItem = state.cartList.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= Math.round(existingItem.price);

      }
    },
    DeleteItem:(state,action)=>{
      const items=state.cartList.filter((item)=>
      item.id !== action.payload.id)
      console.log("itmes",items)
      state.cartList=items
      console.log("state.cartList",state.cartList)
      
    }
  },
});

export default CartShoppingSlice;
export const { addTolist,IncreaseQuanity,DecreaseQuanity,DeleteItem } = CartShoppingSlice.actions;
