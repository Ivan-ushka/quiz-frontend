import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {IQuizForm} from "../createQuiz/interfaces";
import {RouteProps, useParams} from "react-router-dom";
import QuizService from "../../http/QuizService";
import TakingQuiz from "./TakingQuiz";

interface QuizPageParams {
    quizId: string | undefined;

    [key: string]: string | undefined;
}

const StartQuizForm: React.FC<RouteProps> = () => {
    const [isStart, setIsStart] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const {quizId} = useParams<QuizPageParams>();

    const [quiz, setQuiz] = useState<IQuizForm>({
        description: "",
        questions: [],
        quizID: "",
        title: "",
        userID: 0,
    });

    useEffect(() => {
        (async (): Promise<void> => {
            if (quizId)
                try {
                    const response = await QuizService.getQuizById(quizId)
                    setQuiz(JSON.parse(response.data.quiz).quiz)
                } catch (e: any) {
                    setError(e)
                }
        })();
    }, [quizId]);

    if (!quiz) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <Container className="py-5 d-flex flex-column justify-content-center text-white">
            {
                isStart ? <TakingQuiz quiz={quiz}/> :
                    <div className="bg-white rounded-5 shadow">
                        <Row className="d-flex justify-content-center align-items-start pt-5 pb-3">
                            <Col md={4} className="text-center text-black">
                                <h2 style={{fontWeight: "700"}} className="text-primary">{quiz.title}</h2>
                                <p >{quiz.description}</p>
                            </Col>
                            <Col md={4} className="text-center text-black">
                                <h2 style={{fontWeight: "700"}} className="text-primary">Additional
                                    information </h2>
                                <p >Number of questions: {quiz.questions.length}</p>
                                <p >Likes:</p>
                                <p >Created by</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex align-items-center justify-content-center p-5">
                                <Button style={{height: 70, width: 207}}
                                        variant="warning"
                                        className="shadow"
                                        onClick={() => setIsStart(true)}
                                >
                                    Start
                                </Button>
                            </Col>
                        </Row>
                    </div>
            }
        </Container>
    );
};

export default StartQuizForm;