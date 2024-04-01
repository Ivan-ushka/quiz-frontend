import {AppThunk} from "./store";
import {fetchAuthFailure, fetchAuthStart, fetchAuthSuccess, setAuth} from "./authSlice";
import AuthService from "../http/AuthService";
import {setUserIDtoQuiz} from "./quizSlice";


export const registration = (name: string, pwd: string): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchAuthStart());
        const response = await AuthService.registration(name, pwd);
        console.log(response);
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(fetchAuthSuccess(response.data.messages));
        dispatch(setUserIDtoQuiz(response.data.user.id))
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));
    }
};

export const login = (name: string, pwd: string): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchAuthStart());
        const response = await AuthService.login(name, pwd);
        console.log(response);
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(fetchAuthSuccess(response.data.user));
        dispatch(setUserIDtoQuiz(response.data.user.id))
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));
    }
};

export const logout = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchAuthStart());
        const response = await AuthService.logout();
        console.log(response);
        localStorage.removeItem('token')
        dispatch(setAuth(false))
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
    try {
        dispatch(fetchAuthStart());
        const response = await AuthService.checkAuth();
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true))
        dispatch(fetchAuthSuccess(response.data.user));
        dispatch(setUserIDtoQuiz(response.data.user.id))
    } catch (error: any) {
        dispatch(fetchAuthFailure(error.response?.data?.message));
    }
};