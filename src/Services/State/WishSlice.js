import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    items: [],
  },
  reducers: {
    addWishItem: (state, action)=>{
      state.items.push(action.payload)
    },
    // removeItem: (state, action)=>state.items.slice(action.payload)
  },
})

export const {addWishItem} = wishSlice.actions

export default wishSlice.reducer