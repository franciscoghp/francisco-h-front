import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { panelSignIn } from "./thunk/panelLogin";

export interface AuthState {
    userLogged: boolean;
    errorLogin: boolean;
    // fetchingLogin: boolean;
}

const initialState: AuthState = {
    userLogged: false,
    errorLogin: false,
    // fetchingLogin: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
            setUserLogged(state, action) {
                state.userLogged = action.payload;
            },
            logout(state) {
                state.userLogged = false;
                localStorage.removeItem('user-logged')
            },
            setErrorLogin(state, action) {
                state.errorLogin = action.payload;
            },
            // setFetchingLogin(state, action) {
            //     state.fetchingLogin = action.payload;
            // }
        },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
                ...action
            };
        });
        // builder.addCase(panelSignIn.fulfilled, (state, action) => {
        //     state.fetchingLogin = false;
        // });
        // builder.addCase(panelSignIn.pending, (state, action) => {
        //     state.fetchingLogin = true;
        // });
    }
});

export const { setUserLogged, logout, setErrorLogin } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;

export default authSlice.reducer;