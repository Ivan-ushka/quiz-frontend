import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Header from "../../components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faPen, faFloppyDisk, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import QuizQuestion from "./QuizQuestion";
import QuizSettings from "./QuizSettings";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {addQuestion, deleteQuestion} from "../../state/quizSlice";
import './styles.css'
import {IAnswer} from "./interfaces";

const QuizForm = () => {
    const quiz = useSelector((state: RootState) => state.quiz.quiz)
    let numbQuestions = useSelector((state: RootState) => state.quiz.quiz.questions.length)
    const dispatch = useDispatch()
    const [settingsOrQuestions, setSettingsOrQuestions] = useState<number>(0)
    const [indexQuestion, setIndexQuestion] = useState<number>(0)
    const [newIndexQuestion, setNewIndexQuestion] = useState<number>(0)
    const [validated, setValidated] = useState(false);
    const [validatedCheckBoxes, setValidatedCheckBoxes] = useState("");
    const [numbButtonSubmit, setNumbButtonSubmit] = useState(0);
    const handleNextQuestion = () => {
        if (indexQuestion >= numbQuestions - 1) {
            dispatch(addQuestion())
        }
        setIndexQuestion(indexQuestion + 1)
    }

    const validCheckBoxes = () => {
       const isCorrect = Object.values(quiz.questions[indexQuestion].answers).some((answer: IAnswer) => answer.isCorrect)
        return isCorrect;
    }
    const handlePreviousQuestion = () => {
        if (indexQuestion - 1 < 0) {
            setIndexQuestion(numbQuestions - 1)
        } else {
            setIndexQuestion(indexQuestion - 1)
        }
    }

    const handleValidationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        validCheckBoxes()

        if (form.checkValidity()) {
            setValidated(false)
            if(validCheckBoxes()) {
                setValidatedCheckBoxes("")
                if (numbButtonSubmit === 0)
                    setSettingsOrQuestions(0)
                if (numbButtonSubmit === 2)
                    handlePreviousQuestion()
                if (numbButtonSubmit === 3)
                    handleNextQuestion()
                if (numbButtonSubmit === 4)
                    setIndexQuestion(newIndexQuestion)
            }
            else{
                setValidatedCheckBoxes("At least one answer should be correct")
            }
            if (numbButtonSubmit === 1)
                setSettingsOrQuestions(1)
        } else {
            if(!validCheckBoxes()) {
                setValidatedCheckBoxes("At least one answer should be correct")
            }else setValidatedCheckBoxes("")
            setValidated(true)
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
        <>
            <Header/>
            {/*
            <div onClick={() => console.log(indexQuestion, numbQuestions, Boolean(numbQuestions))}>ffff</div>
*/}
            <Container className="bg-white my-4 rounded-3 shadow">
                <Form noValidate validated={validated}
                      onSubmit={handleValidationSubmit} >
                    <Row>
                        <Col md={4} className="rounded bg-light p-3 p-md-2 p-lg-3 ">
                            <Row className="justify-content-md-center pt-2">
                                <Col className="d-flex justify-content-end">
                                    <Button type="submit" className="border-secondary shadow" onClick={() => setNumbButtonSubmit(0)}>
                                        <FontAwesomeIcon icon={faPen} className="pe-1"/>
                                        Settings
                                    </Button>
                                </Col>
                                <Col className="d-flex justify-content-start">
                                    <Button type="submit" className="border-secondary shadow" onClick={() => setNumbButtonSubmit(1)}>
                                        Questions
                                    </Button>
                                </Col>
                            </Row>

                            {settingsOrQuestions ?
                                <Row className="p-4">
                                    {new Array(numbQuestions).fill(1).map((item, index) =>
                                        <Container key={index}>
                                            <Row>
                                                <Col as="button" type="submit" xs={9} onClick={() => handleMenuQuestion(index)}
                                                     className="bg-primary border-secondary-subtle shadow text-white rounded p-2 my-2">
                                                     Question №{' '}{index + 1}
                                                    {/*{quiz.questions[index].question}*/}
                                                </Col>
                                                <Col className="d-flex align-items-center ">
                                                    <Button className="border-secondary shadow" disabled={!Boolean(numbQuestions - 1)}
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
                            {settingsOrQuestions ? <QuizQuestion questionIndex={indexQuestion} validatedCheckBoxes={validatedCheckBoxes} />
                                : <QuizSettings/>
                            }
                        </Col>
                    </Row>
                    <Row className="bg-light p-3 border-top border-2 border-secondary-subtle rounded-bottom">
                        <Col xs={4} className="d-flex justify-content-center">
                            <Button className="border-secondary shadow"><FontAwesomeIcon icon={faFloppyDisk} className="pe-2"/>Save</Button>
                        </Col>
                        {settingsOrQuestions ?
                            <Col xs={8} className="d-flex justify-content-center">
                                <Row className="justify-content-md-center">
                                    <Col xs={5} className="d-flex justify-content-end">
                                        <Button type="submit" className="border-secondary shadow" onClick={() => setNumbButtonSubmit(2)}>
                                            <Container className="d-flex flex-row align-items-center">
                                                <FontAwesomeIcon icon={faArrowLeft} className="pe-1"/>
                                                Previous
                                            </Container>
                                        </Button>
                                    </Col>
                                    <Col className="d-flex justify-content-start">
                                        <Button type="submit" className="border-secondary shadow" onClick={() => setNumbButtonSubmit(3)}>
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