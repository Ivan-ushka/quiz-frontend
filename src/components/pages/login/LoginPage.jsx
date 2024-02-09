import React, {useContext} from 'react';
import Header from "../../header/Header";
import LoginForm from "./LoginForm";

import {Navigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const LoginPage = () => {
    const {store} = useContext(Context)

    return (
        <>
            {store.isAuth ? <Navigate to="/" replace/> : (
                <>
                    <Header/>
                    <LoginForm/>
                </>
            )}
        </>
    );
};

export default observer(LoginPage);