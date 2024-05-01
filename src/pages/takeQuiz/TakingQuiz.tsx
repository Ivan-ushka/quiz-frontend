import React, {useState} from 'react';
import {IQuizForm} from "../createQuiz/interfaces";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ResultForm from "./ResultForm";

interface QuizProps {
    quiz: IQuizForm;
}

const TakingQuiz: React.FC<QuizProps> = ({quiz}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const answers = currentQuestion.answers;
    const numbQuestions = quiz.questions.length;
    const totalCorrectAnswers = userAnswers.filter(
        (answerIndex, index) => quiz.questions[index].answers[answerIndex].isCorrect
    ).length;

    const hover = {
        cursor: 'pointer',
    };
    const handleAnswerSelect = (selectedAnswerIndex: number) => {
        setUserAnswers([...userAnswers, selectedAnswerIndex]);
        if (currentQuestionIndex < numbQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
        console.log(userAnswers)
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < numbQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    }
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowResults(false);
    };

    const getAnswerColor = (questionIndex: number, answerIndex: number) => {
        const isCorrect = quiz.questions[questionIndex].answers[answerIndex].isCorrect;
        const isSelected = userAnswers[questionIndex] === answerIndex;

        if (isCorrect && isSelected) {
            return 'text-success';
        } else if (isCorrect && !isSelected) {
            return 'text-success';
        } else if (!isCorrect && isSelected) {
            return 'text-danger';
        } else {
            return 'text-black';
        }
    };


    if (showResults) {
        return (
            <ResultForm quiz={quiz}
                        totalCorrectAnswers={totalCorrectAnswers}
                        handleRestartQuiz={handleRestartQuiz}
                        getAnswerColor={getAnswerColor}/>
        );
    } else {
        return (
            <Container className="d-flex flex-column text-center">
                <h2 style={{fontWeight: '800'}}
                    className="text-primary-emphasis text-decoration-underline py-1">
                    Question {currentQuestionIndex + 1}
                </h2>
                <h3 className="my-4 ">{currentQuestion.question}</h3>
                <Container className="p-5">
                    <Row className="d-flex justify-content-center">
                        {answers.map((answer, index) => (
                            <Col sm={3} className="my-1" style={hover}>
                                <Card key={index}
                                      style={{minHeight: '100px'}}
                                      onClick={() => handleAnswerSelect(index)}
                                      className="d-flex align-items-center shadow"
                                >
                                    <Card.Body className="d-flex align-items-center justify-content-center">
                                        <Card.Text>
                                            {answer.answer}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <Button style={{height: '57px', width: "107px"}}
                                    variant="warning"
                                    onClick={handlePreviousQuestion}>
                                Back
                            </Button>
                        </Col>
                        <Col className="d-flex justify-content-start">
                            <Button style={{height: '57px', width: "107px"}}
                                    variant="primary"
                                    onClick={handleNextQuestion}>
                                Next
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
};

export default TakingQuiz;