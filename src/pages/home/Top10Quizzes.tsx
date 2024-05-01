import React, {useEffect, useState} from 'react';
import {IQuizForm} from "../createQuiz/interfaces";
import QuizService from "../../http/QuizService";
import {Container} from "react-bootstrap";
import QuizzesPrintTable from "../../components/QuizzesPrintTable";

const Top10Quizzes = () => {
    const [quizzes, setQuizzes] = useState<IQuizForm[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await QuizService.getAllQuizzes();
                setQuizzes(response.data);
                console.log('333333333333', response)
            } catch (e) {
                setError(e as Error)
            }
        })();
    }, [])


    return (
        <div className="py-5 bg-white d-flex flex-column justify-content-center text-center">
            <Container>
                <h1 className="pb-4">
                    Top 10 quizzes
                </h1>
                {error ? (
                    <p>Error loading data: {error.message}</p>
                ) : (
                    <QuizzesPrintTable isModify={false} quizzes={quizzes} />
                )}
            </Container>
        </div>
    );
};

export default Top10Quizzes;