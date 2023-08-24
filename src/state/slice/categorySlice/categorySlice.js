import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    categoryItems: [],
    status: 'idle',
    error: null,
};

export const retrieveCategory = createAsyncThunk(
    'category/retrieveCategory',
    async () => {
        try {
            const response = await axios.get('http://localhost:4000/category');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(retrieveCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categoryItems = action.payload;
            })
            .addCase(retrieveCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});


export default categorySlice.reducer;