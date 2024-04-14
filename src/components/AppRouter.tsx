import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Authorization from "../pages/authorization/Authorization";
import QuizForm from "../pages/createQuiz/QuizForm";
import MyQuizzes from "../pages/myQuizzes/MyQuizzes";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";
import Information from "../pages/information/Information";
import StartQuizForm from "../pages/doQuiz/StartQuizForm";

const AppRouter = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authorization/register" element={<Authorization />} />
            <Route path="/authorization/login" element={<Authorization />} />
            <Route path="/create-quiz"  element={isAuth ? <QuizForm /> : <Navigate to="/authorization/login" />} />
            <Route path="/my-quizzes" element={isAuth ? <MyQuizzes /> : <Navigate to="/authorization/login" />} />
            <Route path="/information" element={<Information />} />
            <Route path="/quiz/:quizId" element={<StartQuizForm />} />
        </Routes>
    );
};

export default AppRouter;