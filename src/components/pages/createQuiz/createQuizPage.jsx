import React from 'react';
import Header from "../../header/Header";
import {observer} from "mobx-react-lite";

const CreateQuizPage = () => {
    return (
        <>
            <Header />
            <div>
                <h1>Select a template</h1>

            </div>
        </>
    );
};

export default observer(CreateQuizPage);