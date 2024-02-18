import React, {useEffect, useState} from 'react';
import {Form, InputGroup} from "react-bootstrap";



const AnswerOption = ({indexOption, handleOptionChange}) => {
    const [answer, setAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => {
        handleOptionChange(indexOption, answer, isCorrect)
    }, [handleOptionChange, indexOption, answer, isCorrect])


    return (
        <>
                <Form.Label htmlFor="topic">Option {indexOption + 1}</Form.Label>
                <InputGroup className="mb-3 input-group-lg">
                    <Form.Control
                        name="answer"
                        placeholder="Answer"
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </InputGroup>

                <InputGroup  className="mb-3 input-group-lg" variant="secondary">
                    <Form.Check
                        type="checkbox"
                        label="Is correct answer?"
                        name="isCorrect"
                        checked={isCorrect}
                        onChange={() => setIsCorrect(!isCorrect)}
                    />
                </InputGroup>
        </>
    );
};

export default AnswerOption;