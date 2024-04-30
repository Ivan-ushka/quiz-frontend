import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

const Authorization = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    return (
        <>
            {isAuth ? <Navigate to="/" replace/> : (
                <>
                    {window.location.pathname === '/auth/login' && <LoginForm/>}
                    {window.location.pathname === '/auth/register' && <SignInForm/>}
                </>
            )}
        </>
    );
};

export default Authorization;