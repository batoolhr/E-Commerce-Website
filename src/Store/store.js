// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductsSlice";
import CategorySlice from "./CategoriesSlice";
import SpecificCategory from "./OneCategory";
import CartShoopingSLice from "./CartShoppingSLice";


const store=configureStore({
    reducer:{
        products:ProductSlice.reducer,
        Categories:CategorySlice.reducer,
        specificCategory:SpecificCategory.reducer,
        cartShopping:CartShoopingSLice.reducer
    }
})
export default store;