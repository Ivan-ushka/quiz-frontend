import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const GetStartInfoQuiz = ({setAns}) => {
    const {storeQuiz} = useContext(Context)

    const [state, setState] = useState({
        topic: '',
        numbOfQuestions: 0,
        numbPossibleOptions: 0,
    });
    const stateRef = useRef(state);

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    const handleChange = (e) =>{
        const value = e.target.value.replace(/^0+(?=\d)/, '');
        setState({
            ...state,
            [e.target.name]: value,
        });

    };

    useEffect(() => {
        return () => {
            setAns(stateRef.current);
        };
    }, []);

    return (
        <div className="d-flex flex-column ">
            <Container className="d-flex text-start justify-content-center align-items-start flex-column w-50">
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
                    />
                </InputGroup>

                <Form.Label htmlFor="topic">How many questions will be in the quiz?</Form.Label>
                <InputGroup className="mb-3 d-flex">
                    <Form.Control
                        name="numbOfQuestions"
                        placeholder="Number of questions"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        type="number"
                        value={state.numbOfQuestions}
                        onChange={handleChange}
                    />
                </InputGroup>

                <Form.Label htmlFor="topic">How many possible options will be?</Form.Label>
                <InputGroup className="mb-3 d-flex">
                    <Form.Control
                        name="numbPossibleOptions"
                        placeholder="Number of possible options"
                        aria-label="Number of possible options"
                        aria-describedby="basic-addon1"
                        type="number"
                        value={state.numbPossibleOptions}
                        onChange={handleChange}
                    />
                </InputGroup>
            </Container>
        </div>
    );
};

export default observer(GetStartInfoQuiz);