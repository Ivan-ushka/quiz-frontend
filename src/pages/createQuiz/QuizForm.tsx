import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Header from "../../components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faPen, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import QuizQuestion from "./QuizQuestion";
import QuizSettings from "./QuizSettings";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {addQuestion} from "../../state/quizSlice";

const QuizForm = () => {
    const quiz = useSelector((state: RootState) => state.quiz.quiz)
    const numbQuestions = useSelector((state: RootState) => state.quiz.quiz.questions.length)
    const dispatch = useDispatch()
    const [settingsOrQuestions, setSettingsOrQuestions] = useState<number>(0)
    const [indexQuestion, setIndexQuestion] = useState<number>(0)


    const handleNextQuestion = () => {
        if(indexQuestion >= numbQuestions - 1){
           dispatch(addQuestion())
        }

        setIndexQuestion(indexQuestion + 1)
    }

    const handlePreviousQuestion = () => {
        if(indexQuestion - 1 < 0){
            setIndexQuestion(numbQuestions - 1)
        }
        else{
            setIndexQuestion(indexQuestion - 1)
        }

    }
    return (
        <>
            <Header/>
            <div onClick={() => console.log(quiz)}>ffff</div>
            <Container className="bg-white my-4 rounded-3 shadow">
                <Row >
                    <Col md={4} className="rounded bg-light p-3 p-md-2 p-lg-3 ">
                        <Row className="justify-content-md-center pt-2">
                            <Col className="d-flex justify-content-end">
                                <Button onClick={() => setSettingsOrQuestions(0)}>
                                    <FontAwesomeIcon icon={faPen} className="pe-1"/>
                                    Settings
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-start">
                                <Button onClick={() => setSettingsOrQuestions(1)}> Questions </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} className="p-5 pt-5 border-start ">
                        {settingsOrQuestions ? <QuizQuestion questionIndex={indexQuestion}/>
                            : <QuizSettings/>
                        }
                    </Col>
                </Row>
                <Row className="bg-light p-3 border-top border-2 border-secondary-subtle rounded-bottom">
                    <Col className="d-flex justify-content-center">
                        <Button><FontAwesomeIcon icon={faFloppyDisk} className="pe-2"/>Save</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Row className="justify-content-md-center">
                            <Col className="d-flex justify-content-end">
                                <Button>
                                    <Container className="d-flex flex-row align-items-center" onClick={handlePreviousQuestion}>
                                        <FontAwesomeIcon icon={faArrowLeft} className="pe-1" />
                                        Previous
                                    </Container>
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-start">
                                <Button onClick={handleNextQuestion}>
                                    <Container className="d-flex flex-row align-items-center">
                                        Next
                                        <FontAwesomeIcon icon={faArrowRight} className="ps-1"/>
                                    </Container>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default QuizForm;