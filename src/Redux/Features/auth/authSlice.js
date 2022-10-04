import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";


export const loginHandler = createAsyncThunk(
    "auth/loginHandler",
    async (args, { rejectWithValue }) => {
        const { login } = args;

        try {
            const { data } = await axios.post("/api/auth/login", login.input);

            localStorage.setItem("token", data.encodedToken);
            localStorage.setItem("user", JSON.stringify(data.foundUser));

            toast.success(`Welcome ${data.foundUser.firstName}`)

            return data;
        }
        catch (err) {
            console.error(err.response.statusText);
            return rejectWithValue([], false);
        }
    })

export const signupHandler = createAsyncThunk(
    "auth/signupHandler",
    async (arg, { rejectWithValue }) => {
        try {
            const { signup } = arg;
            const { data, status } = await axios.post("/api/auth/signup", signup.input);

            if (status === 201) {
                localStorage.setItem("token", data.encodedToken);
                localStorage.setItem("user", JSON.stringify(data.createdUser));

                toast.success(`Hey! ${data.createdUser.firstName}`);

                return data;
            }
        }
        catch (err) {
            console.error(err.response);
            return rejectWithValue([], false);
        }
    }
)

const initialState = {
    token: localStorage.getItem("token") || null,
    userInfo: localStorage.getItem("user") || null,
    auth: false,
    loading: false,
    signupSuccess: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => state = action.payload
    },
    extraReducers: {
        [loginHandler.pending]: (state, payload) => {
            state.loading = true;
            state.auth = false;
        },
        [loginHandler.fulfilled]: (state, payload) => {
            state.loading = false;
            state.auth = true;
        },
        [loginHandler.rejected]: (state, payload) => {
            state.loading = false;
            state.auth = false;
        },
        [signupHandler.pending]: (state, payload) => {
            state.loading = true;
            state.signupSuccess = false;
        },
        [signupHandler.fulfilled]: (state, payload) => {
            state.loading = false;
            state.signupSuccess = true;
        },
        [signupHandler.rejected]: (state, payload) => {
            state.loading = false;
            state.signupSuccess = false;
        }
    }
})

export const { registerUser } = authSlice.actions;
export default authSlice.reducer;

