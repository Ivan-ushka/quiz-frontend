import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IQuizForm} from "../createQuiz/interfaces";

interface ResProps {
    quiz: IQuizForm,
    totalCorrectAnswers: number,
    handleRestartQuiz: () => void,
    getAnswerColor: (index: number, answerIndex: number) => string,
}

const ResultForm: React.FC<ResProps> = ({quiz, totalCorrectAnswers, handleRestartQuiz, getAnswerColor}) => {
    return (
        <>
            <Container className="p-5  text-center">
                <h2 style={{fontWeight: '800'}}
                    className="text-primary-emphasis text-decoration-underline py-1">
                    Result
                </h2>
                <h3 className="text-center mt-4 ">
                    Total Correct Answers:
                </h3>
                <h3 style={{fontWeight: 800}} className="text-success mb-4">
                    {totalCorrectAnswers}
                </h3>
                <p></p>
                <Button style={{height: 70, width: 207}} className="mx-2 mb-4 mb-md-0" variant="warning"
                        onClick={handleRestartQuiz}>
                    Restart Quiz
                </Button>
                <Link to='/' className="mx-2">
                    <Button style={{height: 70, width: 207}}>Back home</Button>
                </Link>
            </Container>

            <Row className="d-flex mx-2 justify-content-center align-items-center align-items-stretch my-4 py-5 text-center rounded w-100">
                {quiz.questions.map((item, index) => (
                    <Col
                        className="bg-white rounded shadow m-2 p-4 d-flex flex-column align-items-center justify-content-start"
                        key={index} xs={12} sm={6} md={4}>
                        <div className="text-primary-emphasis e">
                            <h4 className="text-decoration-underline">Question: №{index + 1}</h4>
                            <h6>{item.question}</h6>
                        </div>
                        <div>
                            {item.answers.map((answer, answerIndex) => (
                                <p key={answerIndex} className={getAnswerColor(index, answerIndex)}>
                                    {answer.answer}
                                </p>
                            ))}
                        </div>
                    </Col>
                ))}
            </Row>
        </>

    );
};

export default ResultForm;