import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth/authSlice";
import postReducer from "./Features/posts/postSlice";
import commentReducer from "./Features/posts/commentSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        comment: commentReducer
    },
    middleware:[thunk]
})