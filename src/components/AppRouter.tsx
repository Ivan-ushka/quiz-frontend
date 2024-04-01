import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Authorization from "../pages/authorization/Authorization";
import QuizForm from "../pages/createQuiz/QuizForm";
import MyQuizzes from "../pages/MyQuizzes/MyQuizzes";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/authorization/register" element={<Authorization />}></Route>
            <Route path="/authorization/login" element={<Authorization />}></Route>
            <Route path="/create-quiz" element={<QuizForm />}></Route>
            <Route path="/my-quizzes" element={<MyQuizzes />}></Route>
        </Routes>
    );
};

export default AppRouter;