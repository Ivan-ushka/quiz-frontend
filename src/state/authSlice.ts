import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: IUser;
    isAuth: boolean;
    loading: boolean;
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
    loading: true,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchAuthStart: (state) => {
            console.log('isAuth', state.isAuth)
            state.loading = true;
            state.error = null;
        },
        fetchAuthSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading  = false;
            console.log('isAuth', state.isAuth)
            state.error = null;
            state.user = action.payload;
        },
        fetchAuthFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            console.log('isAuth', state.isAuth)
            state.error = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload;
            console.log('isAuth', state.isAuth)
        },
        setLoading(state, action: PayloadAction<boolean>){
            state.loading = action.payload;
            console.log('isAuth', state.isAuth)
        },
    },
});

export const { fetchAuthStart, fetchAuthSuccess, fetchAuthFailure, setAuth, setLoading, } = authSlice.actions;

export default authSlice.reducer;