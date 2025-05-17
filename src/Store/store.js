import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductsSlice";
import CategorySlice from "./CategoriesSlice";
import SpecificCategory from "./OneCategory";
import CartShoopingSLice from "./CartShoppingSLice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    Categories: CategorySlice,
    specificCategory: SpecificCategory,
    cartShopping: CartShoopingSLice,
  },
});

export default store;
