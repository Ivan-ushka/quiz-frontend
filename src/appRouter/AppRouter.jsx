import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/pages/home/Home";
import CreateQuizPage from "../components/pages/createQuiz/createQuizPage";
import Authorization from "../components/pages/login/Authorization";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/authorization/register" element={<Authorization />}></Route>
            <Route path="/authorization/login" element={<Authorization />}></Route>
            <Route path="/create-quiz" element={<CreateQuizPage />}></Route>
        </Routes>
    );
};

export default AppRouter;