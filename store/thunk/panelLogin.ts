import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogin } from "../../services/user.service";
import { setErrorLogin, setUserLogged } from "../authSlice";

export const panelSignIn = createAsyncThunk(
    "panel/panelSignIn",
    async (data: { user: string }, thunkAPI) => {
            const userLogin = await UserLogin(data.user);
            console.log({userLogin})
            if (!userLogin.user.id) {
                // Invalid Credentials
                thunkAPI.dispatch(setErrorLogin(true));
            } else {
                // User Logged
                thunkAPI.dispatch(setErrorLogin(false));
                localStorage.setItem("user-logged", JSON.stringify(userLogin));
                thunkAPI.dispatch(setUserLogged(true));
            }
    }
)
