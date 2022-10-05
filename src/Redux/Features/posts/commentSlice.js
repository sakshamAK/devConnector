import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const getComments = createAsyncThunk(
    "/comments/getComments",
    async (args, { rejectWithValue }) => {
        try {
            const { _id } = args;
            const { data } = await axios.get(`/api/comments/${_id}`);
            return data.comments;
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], false);
        }

    }
)

export const addComment = createAsyncThunk(
    "/comments/addComment",
    async (args, { rejectWithValue }) => {
        const { commentData, token, _id } = args;
        const headers = {
            headers: {
                authorization: token
            }
        }

        try {
            const { data } = await axios.post(`/api/comments/add/${_id}`, { commentData }, headers);
            return data.comments;
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], false);
        }
    }
)

const initialState = {
    comments: [],
    loading: false
};
const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: {
        [getComments.pending]: (state) => {
            state.loading = true;
        },
        [getComments.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.comments = payload;
        },
        [getComments.rejected]: (state, { payload }) => {
            state.loading = false;
        },
        [addComment.pending]: (state) => {
            state.loading = true;
        },
        [addComment.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.comments = payload;
        },
        [addComment.rejected]: (state) => {
            state.loading = false;
        }
    }
})

export default commentSlice.reducer;