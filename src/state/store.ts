import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import authReducer from "./authSlice"


const reducer = combineReducers({
    auth: authReducer,
})

export const store = configureStore({reducer: reducer})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;