import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../components/pages/app/App";
import SignInPage from "../components/pages/signIn/SignInPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/sign-in" element={<SignInPage />}></Route>
        </Routes>
    );
};

export default AppRouter;