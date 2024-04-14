import React from 'react';
import QuizAdvantages from "./QuizAdvantages";
import Top10Quizzes from "./Top10Quizzes";
import StartPanel from "./StartPanel";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <StartPanel/>
            <QuizAdvantages/>
            <Top10Quizzes/>
            <Footer />
        </>
    );
};

export default Home;