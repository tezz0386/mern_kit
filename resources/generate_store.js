const fs = require('fs');
const path = require('path');

function ensureDirectoryExists(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
}

function generateStore(storeName) {
    const storeDirectory = path.join(__dirname, 'src/state');
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
    },
    reducers: {
        taskStart: (state) => {
            state.loading = true;
        },
        taskEnd: (state) => {
            state.loading = false;
        },
        setFailure:(state, action)=>{
            state.error = action.payload;
        },
    }
});

export const {
    taskStart,
    taskEnd,
    setFailure,
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
