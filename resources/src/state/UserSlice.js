import { createSlice } from '@reduxjs/toolkit';
import httpAxios from './axios';
let axios = httpAxios;

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:{
      _id:'',
      name:'',
      email:'',
      password:'',
    },
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    taskStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    taskSuccess: (state, action) => {
      state.loading = false;
    },
    taskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    setUsers:(state, action)=>{
      state.loading = false;
      state.users = action.payload;
    },


    // to set data 
    updateName: (state, action)=>{
      state.user.name = action.payload;
    },
    
    // or may be update like this
    updateUserState: (state, action) => {
      const { key, value } = action.payload;
      if (state.user.hasOwnProperty(key)) {
        state.user[key] = value;
      }
    },

    resetUser: (state)=>{
      state.user._id = '';
      state.user.name = '';
      state.user.email = '';
      state.user.password = '';
    },
    setUser: (state, action)=>{
      state.user = action.payload;
    }
  },
});

const { taskStart, taskSuccess, taskFailure, resetUser, setUser, setUsers } = userSlice.actions;

export const { updateUserState } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(taskStart());
  try {
    let response = await axios.get('users');
    dispatch(setUsers(response.data.data));
  } catch (error) {
    dispatch(taskFailure(error.toString()));
  }
};


export const deleteUser = (userId) => async (dispatch) => {
    dispatch(taskStart());
    try {
      await axios.delete(`users/${userId}`);
      taskSuccess();
      dispatch(fetchUsers());
    } catch (error) {
      dispatch(taskFailure(error.toString()));
    }
};


export const getEditUser = (userId) => async(dispatch)=>{
  dispatch(taskStart());
    try {
      let response = await axios.get(`/users/${userId}`);
      dispatch(setUser(response.data.data));
    } catch (error) {
      dispatch(taskFailure(error.toString()));
    }
};

export const saveUser = (user) => async(dispatch)=>{
  dispatch(taskStart());
    try {
      await axios.post('/users', user);
      fetchUsers();
      dispatch(resetUser());
    } catch (error) {
      dispatch(taskFailure(error.toString()));
    }
};


export const updateUser = (user)=>async(dispatch)=>{
  dispatch(taskStart());
  try {
    await axios.patch(`/users/${user._id}`, user);
    dispatch(taskSuccess());    
  } catch (error) {
    dispatch(taskFailure(error.toString()));
  }
}

export default userSlice;
