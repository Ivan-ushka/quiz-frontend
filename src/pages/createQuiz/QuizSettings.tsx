import React from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {updateDescription, updateTitle} from "../../state/quizSlice";

const QuizSettings = () => {
    const title = useSelector((state: RootState) => state.quiz.quiz.title);
    const description = useSelector((state: RootState) => state.quiz.quiz.description);
    const dispatch = useDispatch()

    const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = event.target.value;
        dispatch(updateTitle(newTitle));
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescription = event.target.value;
        dispatch(updateDescription(newDescription));
    };

    return (
        <div>
            <Form.Label xmlFor="quiz_title">Title of the quiz
                <span className="text-danger">*</span></Form.Label>
            <InputGroup className="mb-3">
                <Form.Control aria-label="title"
                              id="quiz_title"
                              onChange={handleTitleChange}
                              value={title}
                />
            </InputGroup>

            <Form.Label xmlFor="quiz_description">Description of the quiz</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control style={{ height: "200px"}}
                              as="textarea"
                              aria-label="textarea"
                              id="quiz_description"
                              onChange={handleDescriptionChange}
                              value={description}

                />
            </InputGroup>

            <Container className="px-0">
                <p className="mb-2">The quiz code</p>
                <Button className="d-flex">
                    0661234
                    <FontAwesomeIcon icon={faCopy} className="ps-2"/>
                </Button>
            </Container>
        </div>
    );
};

export default QuizSettings;