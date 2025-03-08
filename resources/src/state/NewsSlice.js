import { createSlice } from '@reduxjs/toolkit';

const NewsSclice = createSlice({
    name:'news',
    initialState:{
        news:{
            title:'',
            slug:'',
            image:'',
            summary:'',
            description:'',
        },
        newses:[],
        loading:false,
        error:'',
    },
    reducers:{
        taskStart:(state)=>{
            state.loading = true;
        },
        taskEnd:(state)=>{
            state.loading = false;
        },
        taskFailure:(state, action)=>{
            state.error = action.payload;
        },

        handleChangeNews:(state, action)=>{
            const {key, value}= action.payload;
            if(state.news.hasOwnProperty(key)){
                state.news[key] = value;
            }
        },
        resetNews:(state)=>{
            state.news.title = '';
            state.news.image = '';
            state.
        }
    }
});
const {taskStart, taskEnd, taskFailure, resetNews} = NewsSclice.actions;
export const {handleChangeNews} = NewsSclice.actions;


export default NewsSclice;