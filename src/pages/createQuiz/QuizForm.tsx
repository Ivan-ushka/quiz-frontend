import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import QuizQuestion from "./QuizQuestion";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store";
import {addQuestion, deleteQuestion} from "../../state/quizSlice";
import {IAnswer} from "./interfaces";
import {saveQuiz, updateQuiz} from "../../state/quizActions";
import SettingsOrQuizPanel from "./SettingsOrQuizPanel";
import LeftSideQuestionsMenu from "./LeftSideQuestionsMenu";
import LeftSideSettingsMenu from "./LeftSideSettingsMenu";
import './styles.css'
import RightSideSettings from "./RightSideSettings";

const QuizForm = () => {
    const quiz = useSelector((state: RootState) => state.quiz.quiz);
    const numbQuestions = useSelector((state: RootState) => state.quiz.quiz.questions.length);
    const dispatch: AppDispatch = useDispatch();

    const [settingsOrQuestions, setSettingsOrQuestions] = useState<number>(0)
    const [basicOrAdditionalSettings, setBasicOrAdditionalSettings] = useState<number>(0)
    const [indexQuestion, setIndexQuestion] = useState<number>(0)
    const [newIndexQuestion, setNewIndexQuestion] = useState<number>(0)
    const [showValidation, setShowValidation] = useState(false);
    const [validatedCheckBoxes, setValidatedCheckBoxes] = useState("");
    const [numbButtonSubmit, setNumbButtonSubmit] = useState(0);

    const handleNextQuestion = () => {
        if (indexQuestion >= numbQuestions - 1)
            dispatch(addQuestion())

        setIndexQuestion(indexQuestion + 1)
    }

    const validCheckBoxes = () => {
        const isCorrect = Object.values(quiz.questions[indexQuestion].answers).some((answer: IAnswer) => answer.isCorrect)
        return isCorrect;
    }

    const handlePreviousQuestion = () => {
        if (indexQuestion - 1 < 0)
            setIndexQuestion(numbQuestions - 1)
        else
            setIndexQuestion(indexQuestion - 1)
    }

    const handleValidationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const isValidCheckBoxes = settingsOrQuestions ? validCheckBoxes() : true;

        if (form.checkValidity() && isValidCheckBoxes) {
            setShowValidation(false);
            setValidatedCheckBoxes("");
            switch (numbButtonSubmit) {
                case 0:
                    setSettingsOrQuestions(0);
                    setBasicOrAdditionalSettings(0)
                    break;
                case 1:
                    setSettingsOrQuestions(1);
                    break;
                case 2:
                    handlePreviousQuestion();
                    break;
                case 3:
                    handleNextQuestion();
                    break;
                case 4:
                    setIndexQuestion(newIndexQuestion);
                    break;
                case 5:
                    if(quiz.quizID) dispatch(updateQuiz(quiz));
                    else dispatch(saveQuiz(quiz));
                    break;
                case 6:
                    setBasicOrAdditionalSettings(1)
                    break;
                default:
                    break;
            }
        } else {
            setShowValidation(true);
            setValidatedCheckBoxes(isValidCheckBoxes ? "" : "At least one answer should be correct");
        }
    };

    const handleDeleteQuestion = (index: number) => {
        handlePreviousQuestion()
        dispatch(deleteQuestion(index));
    }

    const handleMenuQuestion = (index: number) => {
        setNewIndexQuestion(index)
        setNumbButtonSubmit(4)
    }

    return (
        <Container className="bg-white my-4 rounded-3 shadow">
            <Form noValidate validated={showValidation}
                  onSubmit={handleValidationSubmit}>
                <Row>
                    <Col md={4} className="rounded bg-light p-3 p-md-2 p-lg-3 ">
                        <SettingsOrQuizPanel setNumbButtonSubmit={setNumbButtonSubmit}/>
                        {
                            settingsOrQuestions ?
                                <LeftSideQuestionsMenu
                                    numbQuestions={numbQuestions}
                                    handleMenuQuestion={handleMenuQuestion}
                                    handleDeleteQuestion={handleDeleteQuestion}
                                /> :
                                <LeftSideSettingsMenu setNumbButtonSubmit={setNumbButtonSubmit}/>
                        }
                    </Col>
                    <Col md={8} className="p-5 pt-5 border-start ">
                        {settingsOrQuestions ?
                            <QuizQuestion
                                questionIndex={indexQuestion}
                                validatedCheckBoxes={validatedCheckBoxes}/> :
                            <RightSideSettings basicOrAdditionalSettings={basicOrAdditionalSettings}/>
                        }
                    </Col>
                </Row>
                <Row className="bg-light p-3 border-top border-2 border-secondary-subtle rounded-bottom">
                    <Col sm={4} md={6} className="d-flex justify-content-center mb-2 mb-sm-0">
                        <Button className="border-secondary shadow"
                                type="submit"
                                onClick={() => setNumbButtonSubmit(5)}>
                            <FontAwesomeIcon icon={faFloppyDisk} className="pe-2"/>
                            Save
                        </Button>
                    </Col>
                    {settingsOrQuestions ?
                        <Col className="d-flex justify-content-center">
                            <Row className="justify-content-md-center">
                                <Col className="d-flex justify-content-md-end justify-content-center">
                                    <Button type="submit"
                                            className="border-secondary shadow"
                                            onClick={() => setNumbButtonSubmit(2)}>
                                        <Container className="d-flex flex-row align-items-center">
                                            <FontAwesomeIcon icon={faArrowLeft} className="pe-1"/>
                                            Previous
                                        </Container>
                                    </Button>
                                </Col>
                                <Col className="d-flex justify-content-md-start justify-content-center">
                                    <Button type="submit"
                                            className="border-secondary shadow"
                                            onClick={() => setNumbButtonSubmit(3)}>
                                        <Container className="d-flex flex-row align-items-center">
                                            {indexQuestion + 1 === numbQuestions ? "Add question" : "Next"}
                                            <FontAwesomeIcon icon={faArrowRight} className="ps-1"/>
                                        </Container>
                                    </Button>
                                </Col>
                            </Row>
                        </Col> :
                        <Col>
                            <Row className="justify-content-md-center">
                                <Col className="d-flex justify-content-md-end justify-content-center">
                                    <Button type="submit"
                                            className="border-secondary shadow"
                                            onClick={() => setNumbButtonSubmit(2)}>
                                        <Container className="d-flex flex-row align-items-center">
                                            <FontAwesomeIcon icon={faArrowLeft} className="pe-1"/>
                                            Previous
                                        </Container>
                                    </Button>
                                </Col>
                                <Col className="d-flex justify-content-md-start justify-content-center">
                                    <Button type="submit"
                                            className="border-secondary shadow"
                                            onClick={() => setNumbButtonSubmit(3)}>
                                        <Container className="d-flex flex-row align-items-center">
                                            Next
                                            <FontAwesomeIcon icon={faArrowRight} className="ps-1"/>
                                        </Container>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    }
                </Row>
            </Form>
        </Container>
    );
};

export default QuizForm;