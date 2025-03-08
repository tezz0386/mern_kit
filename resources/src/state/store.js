import { configureStore } from '@reduxjs/toolkit'
import userSlice from './UserSlice';
import ProductSlice from './ProductSlice';
export default configureStore({
  reducer: {
    user:userSlice.reducer,
    product:ProductSlice.reducer,
  }
})