import React, {useCallback, useContext, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import AnswerOption from "./AnswerOption";
import {Context} from "../../index";

const CreateQuestion = ({indexQuestion, handleNextComponent}) => {
    const {storeQuiz} = useContext(Context)
    const [validated, setValidated] = useState(false);

    const handleOptionChange = useCallback((indexOption, newAnswer, newIsCorrect) => {
        setOptions((prevQuestions) =>
            prevQuestions.map((option) =>
                option.id === indexOption ? { ...option, answer: newAnswer, isCorrect: newIsCorrect, } : option
            )
        );
    }, []);

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
    const renderOptions = () => {
        const components = [];
        for (let i = 0; i < storeQuiz.quiz.numbPossibleOptions; i++) {
            components.push(<AnswerOption key={i + indexQuestion * storeQuiz.quiz.numbOfQuestions} indexOption={i} handleOptionChange={handleOptionChange}/>);
        }
        return components;
    };

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex p-5 border border-2 border-light-purple shadow rounded flex-column m-1 bg-white">
                <Form.Label htmlFor="topic">Write your question!</Form.Label>
                <InputGroup className="mb-3 input-group-lg">
                    <Form.Control
                        name="questionText"
                        placeholder="Question"
                        className="d-flex"
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