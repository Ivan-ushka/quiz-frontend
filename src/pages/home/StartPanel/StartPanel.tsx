import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.css'

const StartPanel = () => {
    return (
        <div className="text-white d-flex text-center align-items-center justify-content-center flex-column main-container">
            <h1  className='fw-bold title'>
                Create quiz
            </h1>
            <h3 className="p-1 subtitle">
                Create and launch a quiz at the <br/> level of the best quiz studios
            </h3>
            <Container className="d-flex justify-content-center p-3">
                <Link to="/create/quiz">
                    <Button
                        size="lg"
                        variant="warning"
                        className="m-1 shadow-lg start-panel-btn"
                    >
                        Create quiz
                    </Button>
                </Link>
                <Link to="/search">
                    <Button
                        size="lg"
                        variant="primary"
                        className="m-1 shadow-lg start-panel-btn"
                    >
                        Take quizzes
                    </Button>
                </Link>
            </Container>
        </div>
    );
};

export default StartPanel;