import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import quizReducer from "./quizSlice"


const reducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer,
})

export const store = configureStore({reducer: reducer})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;