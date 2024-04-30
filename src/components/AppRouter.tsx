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
import Search from "../pages/search/Search";

const AppRouter = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/register" element={<Authorization />} />
            <Route path="/auth/login" element={<Authorization />} />
            <Route path="/create/quiz"  element={isAuth ? <QuizPage /> : <Navigate to="/auth/login" />} />
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/auth/login" />} />
            <Route path="/information" element={<Information />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/quiz/:quizId" element={<StartQuizForm />} />
        </Routes>
    );
};

export default AppRouter;