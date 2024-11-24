import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API_BASE_URL } = import.meta.env;

const initialState = {
    categoryList: [],
    isLoading: false,
    isError: false,
};

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${REACT_APP_API_BASE_URL}/categoryList`
            );
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    }
);

export const removeCategories = createAsyncThunk(
    "categories/removeCategories",
    async (payload, { rejectWithValue }) => {
        try {
            await axios.delete(
                `${REACT_APP_API_BASE_URL}/categoryList/${payload}`
            );
            return payload;
        } catch (error) {
            console.error(error.message);
        }
    }
);

export const postCategories = createAsyncThunk(
    "categories/postCategories",
    async function createUser(payload, { rejectWithValue }) {
        try {
            const response = await axios.post(
                `${REACT_APP_API_BASE_URL}/categoryList`,
                payload
            );
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    }
);

// export const updateCategories = createAsyncThunk(
//   "categories/updateCategories",
//   async function createUser(payload, {rejectWithValue}) {
//     console.log(payload);
//     try {
//       const response = await axios.put(`${REACT_APP_API_BASE_URL}/categoryList`,payload);
//       return response.data
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// )

export const categorySlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.categoryList = action.payload;
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // Post
        builder.addCase(postCategories.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(postCategories.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.categoryList = [...state.categoryList, payload];
        });
        builder.addCase(postCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // updateCategories
        // builder.addCase(updateCategories.pending, (state)=>{
        //   state.isError = false;
        //   state.isLoading = true
        // })
        // builder.addCase(updateCategories.fulfilled, (state, {payload})=>{
        //   state.isLoading = false;
        //   state.isError = false;
        //   console.log(payload);
        //   // state.categoryList = [...state.categoryList, payload]
        // })
        // builder.addCase(updateCategories.rejected, (state)=>{
        //   state.isLoading = false;
        //   state.isError = true;
        // })

        // Remove
        builder.addCase(removeCategories.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(removeCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.categoryList = state.categoryList.filter(
                (category) => category.id !== action.payload
            );
        });
        builder.addCase(removeCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;
export const categoriesGetuseSelector = (state) => state.categories;
export default categorySlice.reducer;
