
import { createSlice } from "@reduxjs/toolkit";
import axios from "../helper/axios";
import type { AppDispatch } from ".";

const UserStore = createSlice({
    name: 'UserStore',
    initialState: {
        // Define your initial state here
        loading: false,
        error:'',
        message:'',
    },
    reducers: {
        taskStart: (state) => {
            state.loading = true;
        },
        taskEnd: (state) => {
            state.loading = false;
        },
        taskFailure:(state, action)=>{
            state.error = action.payload;
        },
        setMessage:(state, action)=>{
            state.message = action.payload;
        }
    }
});

export const {
    taskStart,
    taskEnd,
    taskFailure,
} = UserStore.actions;

export const registerUser = (data:Record<string, any>)=>async(dispatch:AppDispatch)=>{
    dispatch(taskStart());
    try {
        let response = axios.post(`register`, data);
        dispatch(taskEnd());
    } catch (error: any) {
        dispatch(taskFailure(error.response?.data?.message || error.message));
        dispatch(taskEnd());
    }
}


export default UserStore;
    