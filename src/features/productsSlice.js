import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


// Получаем продукты с API

const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:X8-e2j1w/cross";


export const fetchProducts = createAsyncThunk("products/getAll", async () => {
    const res = await axios.get(API_URL);
    return res.data;
});

export const fetchProductById = createAsyncThunk("products/getById", async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null,
        item: {
            "id": null,
            "brend": "",
            "model": "",
            "size": [],
            "price": {
                "price": 0,
                "currency": ""
            },
            "image": []
        },
        ILoading: false,
        IError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(fetchProductById.pending, (state) => {
                state.ILoading = true
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.ILoading = false
                state.item = action.payload
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.ILoading = false
                state.IError = action.error.message
            })

    },
})

export default productsSlice.reducer
