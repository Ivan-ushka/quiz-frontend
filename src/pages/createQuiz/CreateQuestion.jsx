import React, {useState} from 'react';
import {Container, Form, InputGroup} from "react-bootstrap";
import AnswerOption from "./AnswerOption";

const CreateQuestion = ({index, options}) => {
    const [questions, setQuestions] = useState([{
        id: 0,
        question: '',
        option: [{
            current: '',
            isCorrect: false,
        }],
    }])

    return (
        <Container className="d-flex text-start justify-content-center align-items-start flex-column w-50">
            <Form.Label htmlFor="topic">Write your question!</Form.Label>
            <InputGroup className="mb-3 d-flex">
                <Form.Control
                    name="question"
                    placeholder="Question"
                    className="d-flex"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"

                />
            </InputGroup>

            {
                Array(5).fill().map((_, index) => (
                    <AnswerOption key={index}>Элемент</AnswerOption>
                ))
            }

            <Form.Label htmlFor="topic">Option 1</Form.Label>
            <InputGroup className="mb-3 d-flex">
                <Form.Control
                    name="numbOfQuestions"
                    placeholder="Number of questions"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="number"

                />
            </InputGroup>

        </Container>
    );
};

export default CreateQuestion;