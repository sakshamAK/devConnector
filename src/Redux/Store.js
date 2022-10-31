import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth/authSlice";
import postReducer from "./Features/posts/postSlice";
import commentReducer from "./Features/posts/commentSlice";
import myPostsReducer from "./Features/myPosts/myPostsSlice";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        comment: commentReducer,
        myPost: myPostsReducer,
    },
    middleware:[thunk]
})