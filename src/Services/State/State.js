import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./CartSlice"
import wishReducer from "./WishSlice"


export default configureStore({
  reducer: {
    wishList: wishReducer,
    cartList: cartReducer
  },
})