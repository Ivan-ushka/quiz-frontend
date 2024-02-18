import React, {useContext, useState} from 'react';
import Header from "../../components/header/Header";
import {observer} from "mobx-react-lite";
import GetStartInfoQuiz from "./GetStartInfoQuiz";
import CreateQuestion from "./CreateQuestion";
import {Context} from "../../index";
import EndQuiz from "./EndQuiz";
import {toJS} from "mobx";

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
        currentComponentElement = <GetStartInfoQuiz handleNextComponent={handleNextComponent}/>;
    } else if (currentComponent > -1 && currentComponent < storeQuiz.quiz.numbOfQuestions) {
        currentComponentElement = <CreateQuestion handleNextComponent={handleNextComponent} indexQuestion={currentComponent}/>;
    }
    else{
        currentComponentElement = <EndQuiz />
    }

    return (
        <>
            <Header/>
            <h1 className="text-center p-4" onClick={() => console.log(toJS((storeQuiz).quiz))}>Create your own quiz!</h1>
            {currentComponentElement}
        </>
    );
};

export default observer(CreateQuizPage);