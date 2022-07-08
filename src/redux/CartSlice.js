import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    AddItem: (state, action) => {
      state.value = [...state.value, action.payload];
      // localStorage.setItem('electronic-shop-rohan', JSON.stringify(state.value));
      console.log(state.value)
    },
    DeleteItem: (state, action) => {
      // localStorage.setItem('electronic-shop-rohan', JSON.stringify(state.value.map((d) => d.product).filter((d) => d.id !== action.payload.id)));

      state.value = state.value.map((d) => d.product).filter((d) => d.id !== action.payload.id)
      console.log(state.value)
    }
  }
})

// Action creators are generated for each case reducer function
export const { AddItem, DeleteItem } = CartSlice.actions

export default CartSlice.reducer