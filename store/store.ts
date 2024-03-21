import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import {authSlice} from "./authSlice";
import {createWrapper} from "next-redux-wrapper";
import { loadingSlice } from "./loadingSlice";

const makeStore = () => 
   configureStore({
      reducer: {
        [authSlice.name]: authSlice.reducer,
        [loadingSlice.name]: loadingSlice.reducer,
      },
      devTools: true,
   });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AnyAction
>;


export const wrapper = createWrapper<AppStore>(makeStore);