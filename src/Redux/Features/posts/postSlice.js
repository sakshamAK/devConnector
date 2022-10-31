import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    "post/getPosts",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("/api/posts");
            return data.posts;
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], false);
        }
    }
)

export const uploadPost = createAsyncThunk(
    "post/uploadPost",
    async (args, { rejectWithValue }) => {
        try {

            const { postData, token } = args;
            const headers = {
                headers: { authorization: token }
            }
            console.table(postData)
            const { data } = await axios.post("/api/posts", { postData }, headers)

            return data.posts;
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], "error occured try again");
        }
    }
)

export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (args, { rejectWithValue }) => {
        const { _id, token } = args;
        const headers = {
            headers: {
                authorization: token
            }
        }

        try {
            const { data } = await axios.delete(`/api/posts/${_id}`, headers)
            return data.posts
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], false);
        }
    }
)

const initialState = {
    posts: [],
    loading: false,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getPosts.pending]: state => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        },
        [getPosts.rejected]: (state) => {
            state.loading = false;
        },
        [uploadPost.pending]: state => {
            state.loading = true;
        },
        [uploadPost.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        },
        [uploadPost.rejected]: (state) => {
            state.loading = false;
        },
        [deletePost.pending]: state => {
            state.loading = true;
        },
        [deletePost.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        },
        [deletePost.rejected]: (state) => {
            state.loading = false;
        },

    }
})

export default postSlice.reducer;
