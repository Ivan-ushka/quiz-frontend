import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";
import Information from "../pages/information/Information";
import StartQuizForm from "../pages/takeQuiz/StartQuizForm";
import Profile from "../pages/profile/Profile/Profile";
import Search from "../pages/search/Search";
import SignInForm from "../pages/authorization/SignInForm";
import LoginForm from "../pages/authorization/LoginForm";
import QuizForm from "../pages/createQuiz/QuizForm";

const AppRouter = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
    const isLoading: boolean = useSelector((state: RootState) => state.auth.isLoading);

    if(isLoading){
        return (
            <div className="w-100 d-flex justify-content-center align-items-center my-5">
                <div className="spinner-border spinner-border-sm text-warning" style={{width: '60px', height: '60px'}}
                     role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/register" element={!isAuth ? <SignInForm/> : <Navigate to="/"/>}/>
            <Route path="/auth/login" element={!isAuth ? <LoginForm/> : <Navigate to="/"/>}/>
            <Route path="/create/quiz" element={ isAuth ? <QuizForm/> : <Navigate to="/auth/login"/>}/>
            <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/auth/login"/>}/>
            <Route path="/information" element={<Information/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/quiz/:quizId" element={<StartQuizForm/>}/>
        </Routes>
    );
};

export default AppRouter;