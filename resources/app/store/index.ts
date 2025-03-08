import { configureStore } from '@reduxjs/toolkit'
import UserStore from './UserStore' 
import { useDispatch } from "react-redux";

const store =  configureStore({
  reducer: {
    UserStore:UserStore.reducer,
  },
})

export default store;


export type AppDispatch = typeof store.dispatch;

