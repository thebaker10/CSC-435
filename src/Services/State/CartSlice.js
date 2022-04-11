import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action)=>{
      state.items.push(action.payload)
    },
    // removeItem: (state, action)=>state.items.slice(action.payload)
  },
})

export const {addCartItem} = cartSlice.actions

export default cartSlice.reducer