import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './slice/menuSlice/menuSlice';
import categorySlice from './slice/categorySlice/categorySlice';
import cartSlice from './slice/cartSlice/cartSlice';
import authSlice from './slice/authSlice/authSlice';


const store = configureStore({
  reducer: {
    menu: menuSlice,
    category: categorySlice,
    cart: cartSlice,
    auth : authSlice
  },
});

export default store;