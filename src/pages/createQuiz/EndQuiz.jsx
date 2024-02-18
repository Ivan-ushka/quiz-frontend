import React from 'react';
import {Button, Container} from "react-bootstrap";

const EndQuiz = () => {
    return (
        <div className="d-flex flex-column mb-3">
            <Container className="d-flex text-start justify-content-center align-items-center flex-column w-50">
                <h4>You are almost done</h4>
                <Container>
                    <Button variant="secondary" onClick={() => console.log('finish')}>Finish</Button>
                </Container>
            </Container>
        </div>
    );
};

export default EndQuiz;