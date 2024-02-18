import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

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
        if(form.checkValidity()){
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
        <div className="d-flex flex-column ">
            <Container className="d-flex text-start justify-content-center align-items-center flex-column">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex text-start justify-content-center align-items-start flex-column w-50">
                    <Form.Label htmlFor="topic">Write the topic of the quiz</Form.Label>
                    <InputGroup className="mb-3 d-flex">
                        <Form.Control
                            name="topic"
                            placeholder="Topic"
                            className="d-flex"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
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

                    <InputGroup hasValidation className="mb-3 d-flex">
                        <Form.Control
                            name="numbOfQuestions"
                            placeholder="Number of questions"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
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
                    <InputGroup className="mb-3 d-flex">
                        <Form.Control
                            name="numbPossibleOptions"
                            placeholder="Number of possible options"
                            aria-label="Number of possible options"
                            aria-describedby="basic-addon1"
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
        </div>
    );
};

export default observer(GetStartInfoQuiz);