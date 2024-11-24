import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API_BASE_URL } = import.meta.env;
const initialState = {
    authorList: [],
    isLoading: false,
    isError: false,
};
export const getAuthors = createAsyncThunk(
    "authors/getAuthors",
    async (payload) => {
        try {
            const response = await axios.get(
                `${REACT_APP_API_BASE_URL}/authorList`
            );
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    }
);

export const removeAuthors = createAsyncThunk(
    "authors/removeAuthors",
    async (payload) => {
        try {
            await axios.delete(
                `${REACT_APP_API_BASE_URL}/authorList/${payload}`
            );
            return payload;
        } catch (error) {
            console.error(error.message);
        }
    }
);
export const counterSlice = createSlice({
    name: "author",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAuthors.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(getAuthors.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.authorList = payload;
            // console.log(payload);
        });
        builder.addCase(getAuthors.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        builder.addCase(removeAuthors.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(removeAuthors.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.authorList = state.authorList.filter(
                (author) => author.id !== payload
            );
        });
        builder.addCase(removeAuthors.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const authorsGetuseSelector = (state) => state.authors;
export default counterSlice.reducer;
