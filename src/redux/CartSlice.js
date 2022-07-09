import { createSlice, current } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    AddItem: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    DeleteItem: (state, action) => {
      const id = action.payload;
      const currentState = current(state);
      state.value = currentState.value.map((d) => d).filter((d) => d.id !== id);
    }
  }
})

// Action creators are generated for each case reducer function
export const { AddItem, DeleteItem } = CartSlice.actions

export default CartSlice.reducer