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
        <Container className="py-5 d-flex flex-column justify-content-center text-white">
            {
                isStart ? <TakingQuiz quiz={quiz}/> :
                    <div >
                        <Row className="d-flex justify-content-center align-items-center py-5">
                            <Col md={3} className="d-flex flex-column  text-start">
                                <h1 style={{fontWeight: "700"}} className="text-primary">{quiz.title}</h1>
                                <p className="ps-2">{quiz.description}</p>
                                <h2 style={{fontWeight: "700"}} className="text-primary pt-3">Additional information </h2>
                                <p className="ps-2">Number of questions: {quiz.questions.length}</p>
                                <p className="ps-2">Likes:</p>
                                <p className="ps-2">Created by</p>
                            </Col>
                            <Col md={3}>
                                <div className="p-5 ">
                                    <Button style={{height: 70, width: 207}}
                                            variant="warning"
                                            className="shadow"
                                            onClick={() => setIsStart(true)}>Start</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </div>
            }
        </Container>
    );
};

export default StartQuizForm;