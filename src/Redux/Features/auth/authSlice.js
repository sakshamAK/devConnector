import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    profileSrc: "",
    password: "",
    auth: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => state = action.payload
    }
})

export const { registerUser } = authSlice.actions;
export default authSlice.reducer;

