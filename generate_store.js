const fs = require('fs');
const path = require('path');

function ensureDirectoryExists(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
}

function generateStore(storeName) {
    const storeDirectory = path.join(__dirname, 'resources/app/store');
    ensureDirectoryExists(storeDirectory);

    const storeFileName = `${storeName}Store.js`;
    const storeContent = `
import { createSlice } from "@reduxjs/toolkit";
import axios from "../helper/axios";

const ${storeName}Store = createSlice({
    name: '${storeName}Store',
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
    setMessage,
} = ${storeName}Store.actions;

export default ${storeName}Store.reducer;
    `;

    fs.writeFileSync(path.join(storeDirectory, storeFileName), storeContent);
    console.log(`Redux store file "${storeFileName}" created successfully.`);
}

// Get store name from command-line arguments
const storeName = process.argv[2];

if (storeName) {
    generateStore(storeName);
} else {
    console.log("Please provide a store name.");
}
