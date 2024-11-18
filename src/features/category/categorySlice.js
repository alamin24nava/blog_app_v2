import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const { REACT_APP_API_BASE_URL } = import.meta.env;



const initialState = {
  categoryList:[],
  isLoading:false,
  isError:false,
}
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (payload, {rejectWithValue})=> {
    try {
      const response = await axios.get(`${REACT_APP_API_BASE_URL}/categoryList`)
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
)

export const removeCategories = createAsyncThunk(
  "categories/removeCategories",
  async (payload, {rejectWithValue})=> {
    try {
     await axios.delete(`${REACT_APP_API_BASE_URL}/categoryList/${payload}`)
      return payload
    } catch (error) {
      console.error(error.message);
    }
  }
)

// export const removeCategories = createAsyncThunk(
//   "authors/deleteCategories",
//   async (id) => {
//     console.log(id);
//     await fetch(`${REACT_APP_API_BASE_URL}/categoryList/${id}`, {
//       method: "DELETE",
//     });
//     return id;
//   }
// );

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(getCategories.pending, (state)=>{
      state.isError = false;
      state.isLoading = true
    })
    builder.addCase(getCategories.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.isError = false;
      state.categoryList = action.payload
    })
    builder.addCase(getCategories.rejected, (state)=>{
      state.isLoading = false;
      state.isError = true;
    })
    // Remove
    builder.addCase(removeCategories.pending, (state)=>{
      state.isError = false;
      state.isLoading = true
    })
    builder.addCase(removeCategories.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.isError = false;
      state.categoryList = state.categoryList.filter((category)=>category.id !== action.payload)
      // state.categoryList = state.categoryList.filter(
      //   (item) => item.id !== action.payload
      // );
    })
    builder.addCase(removeCategories.rejected, (state)=>{
      state.isLoading = false;
      state.isError = true;
    })
  }
})

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions
export const categoriesGetuseSelector = (state) => state.categories;
export default categorySlice.reducer