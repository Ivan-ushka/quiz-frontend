import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Header from "../../components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faPen, faFloppyDisk, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import QuizQuestion from "./QuizQuestion";
import QuizSettings from "./QuizSettings";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {addQuestion, deleteOption, deleteQuestion} from "../../state/quizSlice";
import './styles.css'

const QuizForm = () => {
    const quiz = useSelector((state: RootState) => state.quiz.quiz)
    let numbQuestions = useSelector((state: RootState) => state.quiz.quiz.questions.length)
    const dispatch = useDispatch()
    const [settingsOrQuestions, setSettingsOrQuestions] = useState<number>(0)
    const [indexQuestion, setIndexQuestion] = useState<number>(0)
    const [validatedSettings, setValidatedSettings] = useState(false);
    const [validated, setValidated] = useState(false);
    const [validatedQuestions, setValidatedQuestions] = useState(false);

    const handleNextQuestion = () => {
        if (indexQuestion >= numbQuestions - 1) {
            dispatch(addQuestion())
        }
        setIndexQuestion(indexQuestion + 1)
    }

    const handlePreviousQuestion = () => {
        if (indexQuestion - 1 < 0) {
            setIndexQuestion(numbQuestions - 1)
        } else {
            setIndexQuestion(indexQuestion - 1)
        }
    }
    const handleValidationSettingsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if(settingsOrQuestions) setValidatedQuestions(form.checkValidity())
        else setValidatedSettings(form.checkValidity())
    };

    const handleDeleteQuestion = (index: number) => {
        handlePreviousQuestion()
        dispatch(deleteQuestion(index));
    }


    return (
        <>
            <Header/>
            {/*
            <div onClick={() => console.log(indexQuestion, numbQuestions, Boolean(numbQuestions))}>ffff</div>
*/}
            <Container className="bg-white my-4 rounded-3 shadow">
                <Form noValidate validated={validated} onSubmit={handleValidationSettingsSubmit}>
                    <Row>
                        <Col md={4} className="rounded bg-light p-3 p-md-2 p-lg-3 ">
                            <Row className="justify-content-md-center pt-2">
                                <Col className="d-flex justify-content-end">
                                    <Button type="submit" onClick={() => setSettingsOrQuestions(0)}>
                                        <FontAwesomeIcon icon={faPen} className="pe-1"/>
                                        Settings
                                    </Button>
                                </Col>
                                <Col className="d-flex justify-content-start">
                                    <Button type="submit" disabled={!validatedSettings} onClick={() => setSettingsOrQuestions(1)}>
                                        Questions
                                    </Button>
                                </Col>
                            </Row>

                            {settingsOrQuestions ?
                                <Row className="p-4">
                                    {new Array(numbQuestions).fill(1).map((item, index) =>
                                        <Container key={index}>
                                            <Row>
                                                <Col xs={9} onClick={() => setIndexQuestion(index)}
                                                     className="container-hover bg-primary shadow text-white rounded p-2 my-2">
                                                    {index + 1}{' '}
                                                    {quiz.questions[index].question}
                                                </Col>
                                                <Col className="d-flex align-items-center ">
                                                    <Button disabled={!Boolean(numbQuestions - 1)}
                                                            onClick={() => handleDeleteQuestion(index)}>
                                                        <FontAwesomeIcon icon={faTrashCan}/>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )}
                                </Row> : <></>
                            }
                        </Col>
                        <Col md={8} className="p-5 pt-5 border-start ">
                            {settingsOrQuestions ? <QuizQuestion questionIndex={indexQuestion}/>
                                : <QuizSettings validatedSettings={validatedSettings}
                                                handleValidationSettingsSubmit={handleValidationSettingsSubmit}/>
                            }
                        </Col>
                    </Row>
                    <Row className="bg-light p-3 border-top border-2 border-secondary-subtle rounded-bottom">
                        <Col xs={4} className="d-flex justify-content-center">
                            <Button><FontAwesomeIcon icon={faFloppyDisk} className="pe-2"/>Save</Button>
                        </Col>
                        {settingsOrQuestions ?
                            <Col xs={8} className="d-flex justify-content-center">
                                <Row className="justify-content-md-center">
                                    <Col xs={5} className="d-flex justify-content-end">
                                        <Button onClick={handlePreviousQuestion}>
                                            <Container className="d-flex flex-row align-items-center">
                                                <FontAwesomeIcon icon={faArrowLeft} className="pe-1"/>
                                                Previous
                                            </Container>
                                        </Button>
                                    </Col>
                                    <Col className="d-flex justify-content-start">
                                        <Button onClick={handleNextQuestion} disabled={!validatedQuestions}>
                                            <Container className="d-flex flex-row align-items-center">
                                                {indexQuestion + 1 === numbQuestions ? "Add question" : "Next"}
                                                <FontAwesomeIcon icon={faArrowRight} className="ps-1"/>
                                            </Container>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col> : <></>
                        }
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default QuizForm;