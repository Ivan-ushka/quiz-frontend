import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import AnswerOption from "./AnswerOption";
import {Context} from "../../index";

const CreateQuestion = ({indexQuestion, handleNextComponent}) => {
    const {storeQuiz} = useContext(Context)
    const [validated, setValidated] = useState(false);

    const [questionText, setQuestionText] = useState('')

    const initialOption = Array.from({ length: storeQuiz.quiz.numbPossibleOptions }, (_, index) => ({
        id: index,
        answer: '',
        isCorrect: false,
    }));

    const [ options, setOptions] = useState(initialOption)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity()){
            storeQuiz.setQuestionText(indexQuestion, questionText)
            storeQuiz.setOption(indexQuestion, options)
            handleNextComponent(indexQuestion++)
            setQuestionText("")
           console.log(renderOptions())
        }
        setValidated(true)
    };

    const handleOptionChange = (indexOption, newAnswer, newIsCorrect) => {
        setOptions((prevQuestions) =>
            prevQuestions.map((option) =>
                option.id === indexOption ? { ...option, answer: newAnswer, isCorrect: newIsCorrect, } : option
            )
        );
    };

    const renderOptions = () => {
        const components = [];
        for (let i = 0; i < storeQuiz.quiz.numbPossibleOptions; i++) {
            components.push(<AnswerOption key={i + indexQuestion * storeQuiz.quiz.numbOfQuestions} indexOption={i} handleOptionChange={handleOptionChange}/>);
        }
        return components;
    };

    return (
        <Container className="d-flex text-start justify-content-center align-items-start flex-column w-50">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex text-start justify-content-center align-items-start flex-column w-50">
                <Form.Label htmlFor="topic">Write your question!</Form.Label>
                <InputGroup className="mb-3 d-flex">
                    <Form.Control
                        name="questionText"
                        placeholder="Question"
                        className="d-flex"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        type="text"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        required
                    />
                </InputGroup>
                {renderOptions()}
                <Button variant="secondary" type="submit">Continue</Button>
            </Form>
        </Container>
    );
};

export default CreateQuestion;