import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from '../redux/CartSlice';

export default configureStore({
  reducer: CartSlice.reducer
})
