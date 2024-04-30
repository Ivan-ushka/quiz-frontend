import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    error: string | null;
}

export interface IUser{
    id: number,
    name: string,
    pwd: string,
}

const initialState: AuthState = {
    user: {
        id: 0,
        name: '',
        pwd: '',
    },
    isAuth: false,
    isLoading: true,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchAuthSuccess: (state, action: PayloadAction<IUser>) => {
            state.error = null;
            state.user = action.payload;
        },
        fetchAuthFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
    },
});

export const {  fetchAuthSuccess, fetchAuthFailure, setAuth, setLoading, } = authSlice.actions;

export default authSlice.reducer;