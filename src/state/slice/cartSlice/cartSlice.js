import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],
    status: 'idle',
    error: null,
};

const cartSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addNewItem(state, action){
            state.cartItems.push(action.payload);
        }
    }
})

export const { addNewItem} = cartSlice.actions;
export default cartSlice.reducer;