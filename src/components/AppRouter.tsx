import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Authorization from "../pages/authorization/Authorization";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";
import Information from "../pages/information/Information";
import StartQuizForm from "../pages/takeQuiz/StartQuizForm";
import QuizPage from "../pages/createQuiz/QuizPage";
import Profile from "../pages/profile/Profile";

const AppRouter = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authorization/register" element={<Authorization />} />
            <Route path="/authorization/login" element={<Authorization />} />
            <Route path="/create/quiz"  element={isAuth ? <QuizPage /> : <Navigate to="/authorization/login" />} />
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/authorization/login" />} />
            <Route path="/information" element={<Information />} />
            <Route path="/quiz/:quizId" element={<StartQuizForm />} />
        </Routes>
    );
};

export default AppRouter;