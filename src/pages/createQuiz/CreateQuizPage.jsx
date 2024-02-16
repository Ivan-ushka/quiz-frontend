import React, {useContext, useState} from 'react';
import Header from "../../components/header/Header";
import {observer} from "mobx-react-lite";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import GetStartInfoQuiz from "./GetStartInfoQuiz";
import CreateQuestion from "./CreateQuestion";
import {Context} from "../../index";

const CreateQuizPage = () => {
    const {storeQuiz} = useContext(Context)
    const [currentComponent, setCurrentComponent] = useState(-1);

    const handleNextComponent = () => {
        setCurrentComponent((prevComponent) => {
           return prevComponent + 1;
        });
    };

    let currentComponentElement;
    if (currentComponent === -1) {
        currentComponentElement = <GetStartInfoQuiz />;
    } else if (currentComponent > -1 && currentComponent < storeQuiz.quiz.numbOfQuestions) {
        currentComponentElement = <CreateQuestion index={currentComponent}/>;
    }

    return (
        <>
            <Header/>
            <h1 className="text-center p-4">Create your own quiz!</h1>
            {currentComponentElement}
            <Container className="w-50">
                <Button variant="secondary" onClick={handleNextComponent} disabled={!storeQuiz.isStartInfoDataValidation}>Continue</Button>
            </Container>
        </>
    );
};

export default observer(CreateQuizPage);