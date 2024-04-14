import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {IQuizForm} from "../createQuiz/interfaces";
import {RouteProps, useParams} from "react-router-dom";
import QuizService from "../../http/QuizService";
import DoingQuiz from "./DoingQuiz";

interface QuizPageParams {
    quizId: string | undefined;

    [key: string]: string | undefined;
}

const StartQuizForm: React.FC<RouteProps> = () => {
    const [isStart, setIsStart] = useState<boolean>(false)
    const {quizId} = useParams<QuizPageParams>();

    const [quiz, setQuiz] = useState<IQuizForm>({
        description: "", questions: [], quizID: "", title: "", userID: 0
    });
    const fetchQuiz = async (): Promise<void> => {
        if (quizId)
            try {
                const response = await QuizService.getQuizById(quizId)
                console.log(response.data);
                setQuiz(response.data.quiz.quiz)
            } catch (error: any) {
                console.log(error)
            }
    };

    useEffect(() => {
        fetchQuiz()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizId]);

    if (!quiz) return <div>Loading...</div>

    return (
        <Container className="py-5 d-flex text-center flex-column justify-content-center text-white">
            {
                isStart ? <DoingQuiz quiz={quiz} /> :
                    <div>
                        <h1>Tittle: {quiz.title}</h1>
                        <h4>Number of questions: {quiz.questions.length}</h4>
                        <h4>Likes:</h4>
                        <h6>Created by</h6>
                        <div className="p-5">
                            <Button style={{height: 70, width: 207}} variant="warning"
                                    onClick={() => setIsStart(true)}>Start</Button>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default StartQuizForm;