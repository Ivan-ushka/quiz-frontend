import React, {useState} from 'react';
import {Container, Form, InputGroup} from "react-bootstrap";
import AnswerOption from "./AnswerOption";

const CreateQuestion = ({index, options}) => {
    const [question, setQuestion] = useState({
        id: {index},
        question: '',
    })

    const handleChange = (e) => {
        const value = e.target.value.replace(/^0+(?=\d)/, '');
        setQuestion({
            ...question,
            [e.target.name]: value,
        });
    }

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
                    value={question.question}
                    onChange={handleChange}

                />
            </InputGroup>

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