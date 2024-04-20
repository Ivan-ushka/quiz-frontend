import React, {useEffect, useState} from 'react';
import {IQuizForm} from "../createQuiz/interfaces";
import QuizService from "../../http/QuizService";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import QuizzesPrintTable from "../../components/QuizzesPrintTable";

const Top10Quizzes = () => {
    const [quizzes, setQuizzes] = useState<IQuizForm[]>([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await QuizService.getAllQuizzes()
            setQuizzes(response.data)
            console.log(response)
        } catch (e: any) {
            console.log(e)
        }
    }

    const navigate = useNavigate();

    const handleQuizClick = (quizId: string) => {
        navigate(`/quiz/${quizId}`);
    };

    return (
        <div className="py-5 bg-white d-flex flex-column justify-content-center text-center">
            <Container>
                <h1 className="pb-4">
                    Top 10 quizzes
                </h1>
                <QuizzesPrintTable isModify={false} quizzes={quizzes} handleQuizClick={handleQuizClick} />
            </Container>
        </div>
    );
};

export default Top10Quizzes;