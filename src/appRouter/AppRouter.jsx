import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../components/pages/app/App";
import SignInPage from "../components/pages/signIn/SignInPage";
import LoginPage from "../components/pages/login/LoginPage";
import CreateQuizPage from "../components/pages/createQuiz/createQuizPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/sign-in" element={<SignInPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/create-quiz" element={<CreateQuizPage />}></Route>
        </Routes>
    );
};

export default AppRouter;