import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";
import Header from "../../header/Header";

const Authorization = () => {
    const {store} = useContext(Context)
    const location = useLocation();


    return (
        <>
            <Header/>
            {store.isAuth ? <Navigate to="/" replace/> : (
                <>
                    {location.pathname === '/authorization/login' && <LoginForm/>}
                    {location.pathname === '/authorization/register' && <SignInForm/>}
                </>
            )}
        </>
    );
};

export default observer(Authorization);