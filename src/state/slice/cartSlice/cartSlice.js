import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],
    subtotal: 0,
    tax: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addNewItem(state, action) {
            state.cartItems.push(action.payload);
            cartSlice.caseReducers.calculateTotal(state);

        },
        removeItem(state, action) {
            const idToRemove = action.payload;
            const indexToRemove = state.cartItems.findIndex(item => item.id === idToRemove);

            if (indexToRemove !== -1) {
                state.cartItems.splice(indexToRemove, 1);
            }
            cartSlice.caseReducers.calculateTotal(state);
        },
        addQty(state, action) {
            const id = action.payload;
            const itemToUpdate = state.cartItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.jumlah += 1;
            }
            cartSlice.caseReducers.calculateTotal(state);
            
        },
        decreaseQty(state, action) {
            const id = action.payload;
            const itemToUpdate = state.cartItems.find(item => item.id === id);
            if (itemToUpdate && itemToUpdate.jumlah > 1) {
                itemToUpdate.jumlah -= 1;
            }
            cartSlice.caseReducers.calculateTotal(state);
        },
        calculateTotal(state) {
            let total = 0;
            state.cartItems.forEach(element => {
                total += element.harga*element.jumlah
            });
            state.total = total;
        }
    }
})

export const { addNewItem, removeItem, addQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;