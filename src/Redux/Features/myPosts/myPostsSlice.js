import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getMyPosts = createAsyncThunk(
    "posts/myposts",
    async (args, { rejectWithValue }) => {
        const { token, username } = args;
        const headers = {
            headers: {
                authorization: token
            }
        }
        try {
            const { data } = await axios.get(`/api/posts/user/${username}`, headers)
            return data.posts;
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], false);
        }
    }
)

const initialState={
    myPosts:[],
    loading: false
}

const myPostsSlice = createSlice({
    name: "myPosts",
    initialState,
    reducers: {},
    extraReducers:{
        [getMyPosts.pending]: (state) => {
            state.loading = true;
        },
        [getMyPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.myPosts = payload;
        },
        [getMyPosts.rejected]: (state) => {
            state.loading = false;
        }
    }
})

export default myPostsSlice.reducer;