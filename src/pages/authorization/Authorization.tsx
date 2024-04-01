import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {Navigate} from "react-router-dom";
import Header from "../../components/Header";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

const Authorization = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    return (
        <div onClick={() => console.log(isAuth)}>
            {isAuth ? <Navigate to="/" replace/> : (
            <>
                {window.location.pathname === '/authorization/login' && <LoginForm/>}
                {window.location.pathname === '/authorization/register' && <SignInForm/>}
            </>
            )}

        </div>
    );
};

export default Authorization;