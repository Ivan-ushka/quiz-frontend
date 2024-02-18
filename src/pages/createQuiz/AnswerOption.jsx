import React, {useContext, useEffect, useState} from 'react';
import {Container, Form, InputGroup} from "react-bootstrap";
import {Context} from "../../index";
import {isCancel} from "axios";

const AnswerOption = ({indexOption, handleOptionChange}) => {
    const {storeQuiz} = useContext(Context)

    const [answer, setAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => {
        handleOptionChange(indexOption, answer, isCorrect)
    }, [answer, isCorrect])


    return (
        <div>
                <Form.Label htmlFor="topic">Option {indexOption + 1}</Form.Label>
                <InputGroup className="mb-3 d-flex">
                    <Form.Control
                        name="answer"
                        placeholder="Answer"
                        aria-label="Answer"
                        aria-describedby="basic-addon1"
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </InputGroup>

                <InputGroup className="mb-3 d-flex" variant="secondary">
                    <Form.Check
                        type="checkbox"
                        label="Is correct answer?"
                        name="isCorrect"
                        checked={isCorrect}
                        onChange={() => setIsCorrect(!isCorrect)}
                    />
                </InputGroup>
        </div>
    );
};

export default AnswerOption;