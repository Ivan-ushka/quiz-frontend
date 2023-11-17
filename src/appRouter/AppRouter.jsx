import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../components/pages/app/App";
import SignIn from "../components/pages/signIn/SignIn";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
    );
};

export default AppRouter;