import {AppThunk} from "./store";
import {clearError, fetchAuthFailure, fetchAuthSuccess, setAuth, setLoading} from "./authSlice";
import AuthService from "../http/services/AuthService";
import {setUserIDtoQuiz} from "./quizSlice";


export const registration = (name: string, pwd: string): AppThunk => async (dispatch) => {
    try {
        const response = await AuthService.registration(name, pwd);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(fetchAuthSuccess(response.data.messages));
        dispatch(setUserIDtoQuiz(response.data.user.id));
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 2000);
    }
};

export const login = (name: string, pwd: string): AppThunk => async (dispatch) => {
    try {
        const response = await AuthService.login(name, pwd);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true))
        dispatch(fetchAuthSuccess(response.data.user));
        dispatch(setUserIDtoQuiz(response.data.user.id));
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 2000);
    }
};

export const logout = (): AppThunk => async (dispatch) => {
    try {
        await AuthService.logout();
        localStorage.removeItem('token');
        dispatch(setAuth(false));
        dispatch(fetchAuthSuccess({
            id: 0,
            name: '',
            pwd: '',
        }));
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));
    }
};

export const checkAuth = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await AuthService.checkAuth();
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(fetchAuthSuccess(response.data.user));
        dispatch(setUserIDtoQuiz(response.data.user.id));
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));
    } finally {
        dispatch(setLoading(false))
    }
};