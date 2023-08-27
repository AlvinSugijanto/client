import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  menuItems: [],
  status: 'idle',
  error: null,
};

export const retrieveMenu = createAsyncThunk(
  'menu/retrieveMenu',
  async () => {
    try {
      const response = await axios.get('http://localhost:4000/menu');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const createMenuItem = createAsyncThunk(
  'menu/createMenuItem',
  async (newItem) => {
    const formData = new FormData();
    formData.append("nama_menu", newItem.nama_menu);
    formData.append("harga", newItem.harga);
    formData.append("description", newItem.description);
    formData.append("image", newItem.image);
    formData.append("kategori_id", newItem.kategori_id);

    try {
        const response = await axios.post(
            'http://localhost:4000/menu/add',
            formData,
            {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

);

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveMenu.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(retrieveMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.menuItems = action.payload;
      })
      .addCase(retrieveMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createMenuItem.fulfilled, (state,action) => {
 
        state.menuItems.push(action.payload); 
      });
  },
});

export default menuSlice.reducer;




// export const createMenu = createAsyncThunk(
//   "tutorials/create",
//   async ({ data }) => {
//     const res = await axios.post("http://localhost:4000/menu/add", data)
//     return res.data;
//   }
// );


// export const menuSlice = createSlice({
//   name: 'menu',
//   initialState,
  
// })

// Action creators are generated for each case reducer function
