import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoritiesSlice from "./slices/favoritiesSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritiesSlice,
    user: userReducer,
  },
});

export default store;
