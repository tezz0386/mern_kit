import { createSlice } from "@reduxjs/toolkit";
import httpAxios from "./axios";
let axios = httpAxios;
const ProductSlice = createSlice({
    name:'product',
    initialState:{
        product:{
            _id:null,
            title:'',
            summary:'',
            description:'',
        },
        products:[],
        loading:false,
        error:null,
    },

    reducers:{
        taskStart:(state)=>{
            state.loading = true;
        },
        taskEnd:(state)=>{
            state.loading = false;
        },
        taskFailure:(state, action)=>{
            state.error = action.payload
        },
        setProducts:(state, action)=>{
            state.products = action.payload;
        },
        setProduct:(state, action)=>{
            state.product = action.payload;
        },
        handleUpdateProduct:(state, action)=>{
            const {key, value} = action.payload;
            if(state.product.hasOwnProperty(key)){
                state.product[key] = value;
            }
        },
        resetProduct:(state)=>{
            state.product._id = null;
            state.product.summary = '';
            state.product.description = '';
        }
    }
});

const { taskStart, taskEnd, taskFailure, setProducts, setProduct } = ProductSlice.actions;
export const {handleUpdateProduct} = ProductSlice.actions;
export const fetchProducts = ()=>async(dispatch)=>{
    dispatch(taskStart());
    try {
        let response = await axios.get('/products');
        dispatch(setProducts(response.data.data));
        dispatch(taskEnd());
    } catch (error) {
        dispatch(taskEnd());
        dispatch(taskFailure())
    }
};

export const saveProduct = (product)=>async(dispatch)=>{
    dispatch(taskStart());
    try {
        await axios.post('/products', product);
        dispatch(taskEnd());
        dispatch(fetchProducts());
    } catch (error) {
        dispatch(taskEnd());
        dispatch(taskFailure(error.toString()));
    }
}

export const fetchProduct = (productId)=>async(dispatch)=>{
    dispatch(taskStart());
    try {
        let response = await axios.get(`/products/${productId}`);
        dispatch(setProduct(response.data.data));
        dispatch(taskEnd());
    } catch (error) {
        dispatch(taskEnd());
        dispatch(taskFailure(error.toString()));
    }
}

export const updateProduct = (productId, product)=>async(dispatch)=>{
    dispatch(taskStart());
    try {
        await axios.patch(`/products/${productId}`, product);
        dispatch(taskEnd());
        dispatch(fetchProducts());
    } catch (error) {
        dispatch(taskEnd());
        dispatch(taskFailure(error.toString()));
    }
}

export const deleteProduct = (productId) =>async(dispatch)=>{
    dispatch(taskStart());
    try {
        await axios.delete(`/products/${productId}`);
        dispatch(taskEnd());
        dispatch(fetchProducts());
    } catch (error) {
        dispatch(taskEnd());
        dispatch(taskFailure(error.toString()));
    }
}


export default ProductSlice;