import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [
    ]
  },
  reducers: {
    AddItem: (state, action) => {
      state.value = [...state.value, action.payload]
      console.log(state.value)
    },
    DeleteItem: state => {
      state.value -= 1
    },
    UpdateItem: (state, action) => {
      state.value += action.payload
    },
    GetItem: (state) => {
      return state.value
    }
  }
})

// Action creators are generated for each case reducer function
export const { AddItem, DeleteItem, UpdateItem } = CartSlice.actions

export default CartSlice.reducer