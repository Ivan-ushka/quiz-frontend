import React from 'react';
import QuizAdvantages from "./QuizAdvantages";
import Top10Quizzes from "./Top10Quizzes";
import StartPanel from "./StartPanel";

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