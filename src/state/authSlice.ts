import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: object;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: {},
    isAuth: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchAuthStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchAuthSuccess: (state, action: PayloadAction<{}>) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchAuthFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            console.log( action.payload)
            state.error = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload;
        }
    },
});

export const { fetchAuthStart, fetchAuthSuccess, fetchAuthFailure, setAuth, } = authSlice.actions;

export default authSlice.reducer;