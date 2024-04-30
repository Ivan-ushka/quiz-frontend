import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const StartPanel = () => {
    return (
        <div style={{minHeight: "87vh"}} className="text-white d-flex text-center align-items-center justify-content-center p-5 flex-column">
            <h1 style={{fontWeight: 700, fontSize: "72px"}}>
                Create quiz
            </h1>
            <h3 className="p-1">
                Create and launch a quiz at the <br/> level of the best quiz studios
            </h3>
            <Container className="d-flex justify-content-center p-3">
                <Link to="/create/quiz">
                    <Button
                        size="lg"
                        variant="warning"
                        className="py-3 m-1 shadow-lg"
                        style={{height: 70, width: 207}}>Create quiz
                    </Button>
                </Link>
                <Link to="/search">
                    <Button
                        size="lg"
                        variant="primary"
                        className="py-2 m-1 shadow-lg"
                        style={{height: 70, width: 207}}>
                        Do existing quizzes
                    </Button>
                </Link>
            </Container>
        </div>
    );
};

export default StartPanel;