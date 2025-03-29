import React from 'react';
import QuizAdvantages from "./QuizAdvantages/QuizAdvantages";
import Top10Quizzes from "./Top10Quizzes";
import StartPanel from "./StartPanel/StartPanel";

const Home = () => {
    return (
        <>
            <StartPanel/>
            <QuizAdvantages/>
            <Top10Quizzes/>
        </>
    );
};

export default Home;