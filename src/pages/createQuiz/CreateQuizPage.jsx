import React, {useState} from 'react';
import Header from "../../components/header/Header";
import {observer} from "mobx-react-lite";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import GetStartInfoQuiz from "./GetStartInfoQuiz";
import CreateQuestion from "./CreateQuestion";

const CreateQuizPage = () => {
    const [currentComponent, setCurrentComponent] = useState(-1);
    const [ans, setAns] = useState({
        topic: '',
        numbOfQuestions: 0,
        numbPossibleOptions: 0,
        afafaf: 10,
    })

    const updateData = (newData) => {
        setAns({...ans, ...newData});
    };


    const handleNextComponent = () => {
        setCurrentComponent((prevComponent) => {
           return prevComponent + 1;
        });
    };

    let currentComponentElement;
    if (currentComponent === -1) {
        currentComponentElement = <GetStartInfoQuiz setAns={updateData}/>;
    } else if (currentComponent > -1 && currentComponent < ans.numbOfQuestions) {
        currentComponentElement = <CreateQuestion index={currentComponent} options={ans.numbPossibleOptions}/>;
    }

    return (
        <>
            <Header/>
            <h1 className="text-center p-4">Create your own quiz!</h1>
            {currentComponentElement}
            <Container className="w-50">
                <Button variant="secondary" onClick={handleNextComponent}>Continue</Button>
            </Container>
        </>
    );
};

export default observer(CreateQuizPage);