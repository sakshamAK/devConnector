import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth/authSlice";
import postReducer from "./Features/posts/postSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
    }
})