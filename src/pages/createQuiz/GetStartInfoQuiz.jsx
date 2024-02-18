import React, {useContext, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const GetStartInfoQuiz = ({handleNextComponent}) => {
    const {storeQuiz} = useContext(Context)
    const [validated, setValidated] = useState(false);

    const [state, setState] = useState({
        topic: '',
        numbOfQuestions: 0,
        numbPossibleOptions: 0
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            storeQuiz.setStartInfoData(state.topic, state.numbOfQuestions, state.numbPossibleOptions)
            handleNextComponent(0)
        }
        setValidated(true)
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/^0+(?=\d)/, '');
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Form noValidate validated={validated} onSubmit={handleSubmit}
                  className="d-flex p-5 border border-2 border-light-purple shadow rounded flex-column m-1 bg-white ">
                <Form.Label htmlFor="topic">Write the topic of the quiz</Form.Label>
                <InputGroup className="mb-3 input-group-lg">
                    <Form.Control
                        name="topic"
                        placeholder="Topic"
                        className="d-flex"
                        type="text"
                        value={state.topic}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter topic
                    </Form.Control.Feedback>
                </InputGroup>

                <Form.Label htmlFor="topic">How many questions will be in the quiz?</Form.Label>
                <InputGroup hasValidation  className="mb-3 input-group-lg">
                    <Form.Control
                        name="numbOfQuestions"
                        placeholder="Number of questions"
                        type="number"
                        onChange={handleChange}
                        value={state.numbOfQuestions}
                        required
                        min={1}
                        max={30}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter from 1 to 30
                    </Form.Control.Feedback>
                </InputGroup>

                <Form.Label htmlFor="topic">How many possible options will be?</Form.Label>
                <InputGroup className="mb-3  input-group-lg">
                    <Form.Control
                        name="numbPossibleOptions"
                        placeholder="Number of possible options"
                        type="number"
                        onChange={handleChange}
                        value={state.numbPossibleOptions}
                        min={2}
                        max={5}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter from 2 to 5
                    </Form.Control.Feedback>
                </InputGroup>
                <Button variant="secondary" type="submit">Continue</Button>
            </Form>
        </Container>
    );
};

export default observer(GetStartInfoQuiz);