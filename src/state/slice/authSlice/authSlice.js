import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    userData: {},

};

export const login = createAsyncThunk(
    'user/login',
    async (loginData) => {
        try {
            const response = await axios.post('http://localhost:4000/login', loginData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const authSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                localStorage.setItem('user', action.payload.data.token)
                state.userData = { ...state.userData, ...action.payload.data };
                console.log(state.userData);
            })
    },
})


export default authSlice.reducer;