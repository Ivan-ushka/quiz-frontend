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
import SettingsOrQuizBtns from "./SettingsOrQuizBtns";
import LeftSideQuestionsMenu from "./LeftSideQuestionsMenu";
import LeftSideSettingsMenu from "./LeftSideSettingsMenu";
import RightSideSettings from "./RightSideSettings";
import PreviousAndNextBtns from "./PreviousAndNextBtns";

interface ButtonActions {
    goToSettings: () => void;
    goToQuestions: () => void;
    goToAddQuestion: () => void;
    goToCurrentQuestion: () => void;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    saveQuiz: () => void;
    goToAdditionalSettings: () => void;
    [key: string]: () => void;
}
const QuizForm = () => {
    const dispatch: AppDispatch = useDispatch();
    const quiz = useSelector((state: RootState) => state.quiz.quiz);
    const numbQuestions = useSelector((state: RootState) => state.quiz.quiz.questions.length);

    const [isQuizValid, setIsQuizValid] = useState<boolean>(false);
    const [indexQuestion, setIndexQuestion] = useState<number>(0);
    const [newIndexQuestion, setNewIndexQuestion] = useState<number>(0);
    const [showValidation, setShowValidation] = useState(false);
    const [validatedCheckBoxes, setValidatedCheckBoxes] = useState("");
    const [numbButtonSubmit, setNumbButtonSubmit] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<string>('BasicSettings')

    const handleNextPage = () => {
        setCurrentPage(currentPage === 'BasicSettings' ? 'AdditionalSettings' : 'Questions');
    }

    const handlePreviousPage = () => {
        if(currentPage === 'AdditionalSettings')
            setCurrentPage('BasicSettings')
    }

    const handleSaveQuiz = () => {
        if (isQuizValid) {
            const action = quiz.quizID ? updateQuiz(quiz) : saveQuiz(quiz);
            dispatch(action);
        }
    }

    //Logic with actions needs to at first validate current page, and then do action if validation is true
    const handleValidationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const isValidCheckBoxes = currentPage === 'Questions' ? validCheckBoxes() : true;

        if (form.checkValidity() && isValidCheckBoxes) {
            setIsQuizValid(indexQuestion + 1 === numbQuestions)
            setShowValidation(false);
            setValidatedCheckBoxes("");
            const action = buttonActions[numbButtonSubmit];
            if (action) {
                action();
            }
        } else {
            setShowValidation(true);
            setValidatedCheckBoxes(isValidCheckBoxes ? "" : "At least one answer should be correct");
        }
    };

    const validCheckBoxes = () => {
        const isCorrect = Object.values(quiz.questions[indexQuestion].answers).some((answer: IAnswer) => answer.isCorrect)
        return isCorrect;
    }

    const buttonActions: ButtonActions = {
        goToSettings: () => {
            setCurrentPage('BasicSettings')
        },
        goToAdditionalSettings: () => {
            setCurrentPage('AdditionalSettings');
        },
        goToQuestions: () => {
            setCurrentPage('Questions');
        },
        goToAddQuestion: () => {
            handleAddQuestion();
        },
        goToNextPage: () => {
            handleNextPage();
        },
        goToPreviousPage: () => {
            handlePreviousPage();
        },
        goToCurrentQuestion: () => {
            setIndexQuestion(newIndexQuestion);
        },
        saveQuiz: () => {
            handleSaveQuiz();
        },
    };

    const handleDeleteQuestion = (index: number) => {
        handlePreviousQuestion()
        dispatch(deleteQuestion(index));
    }

    const handleMenuQuestion = (index: number) => {
        setNewIndexQuestion(index)
        setNumbButtonSubmit('goToCurrentQuestion')
    }

    // % numbQuestions for cases if ((indexQuestion - 1 + numbQuestions) < 0
    const handlePreviousQuestion = () => {
        setIndexQuestion((indexQuestion - 1 + numbQuestions) % numbQuestions);
    }

    const handleAddQuestion = () => {
        dispatch(addQuestion());
        setIndexQuestion(indexQuestion + 1);
    }

    return (
        <Container className="bg-white my-4 rounded-3 shadow">
            <Form noValidate validated={showValidation}
                  onSubmit={handleValidationSubmit}>
                <Row>
                    <Col md={4} className="rounded bg-light p-3 p-md-2 p-lg-3 ">
                        <SettingsOrQuizBtns setNumbButtonSubmit={setNumbButtonSubmit}/>
                        {
                            currentPage === 'Questions' ?
                                <LeftSideQuestionsMenu
                                    numbQuestions={numbQuestions}
                                    handleMenuQuestion={handleMenuQuestion}
                                    handleDeleteQuestion={handleDeleteQuestion}
                                /> :
                                <LeftSideSettingsMenu setNumbButtonSubmit={setNumbButtonSubmit}/>
                        }
                    </Col>
                    <Col md={8} className="p-5 pt-5 border-start ">
                        {currentPage === 'Questions'?
                            <QuizQuestion
                                questionIndex={indexQuestion}
                                validatedCheckBoxes={validatedCheckBoxes}/> :
                            <RightSideSettings currentPage={currentPage} />
                        }
                    </Col>
                </Row>
                <Row className="bg-light p-3 border-top border-2 border-secondary-subtle rounded-bottom">
                    <Col className="d-flex justify-content-center mb-2 mb-sm-0">
                        <Button className=" shadow"
                                type="submit"
                                onClick={() => setNumbButtonSubmit('saveQuiz')}>
                            <FontAwesomeIcon icon={faFloppyDisk} className="pe-2"/>
                            Save
                        </Button>
                    </Col>
                    <PreviousAndNextBtns currentPage={currentPage} setNumbButtonSubmit={setNumbButtonSubmit} />
                </Row>
            </Form>
        </Container>
    );
};

export default QuizForm;