import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import CreateQuizPage from "../pages/createQuiz/CreateQuizPage";
import Authorization from "../pages/authorization/Authorization";

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