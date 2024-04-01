import React from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {updateDescription, updateTitle} from "../../state/quizSlice";



const QuizSettings = () => {
    const code = useSelector((state: RootState) => state.quiz.quiz.quizID);
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
            <Container className="p-0 mb-3 border-bottom border-secondary-subtle">
                <h6>Settings</h6>
            </Container>
            <Container style={{height: "400px", overflow: 'auto'}}>
                <Form.Label xmlFor="quiz_title">Title of the quiz
                    <span className="text-danger">*</span></Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control aria-label="title"
                                  id="quiz_title"
                                  onChange={handleTitleChange}
                                  value={title}
                                  required
                    />
                    <Form.Control.Feedback type="invalid">
                        Fill in the field
                    </Form.Control.Feedback>
                </InputGroup>

                <Form.Label xmlFor="quiz_description">Description of the quiz</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control style={{height: "200px"}}
                                  as="textarea"
                                  aria-label="textarea"
                                  id="quiz_description"
                                  onChange={handleDescriptionChange}
                                  value={description}
                                  required

                    />
                    <Form.Control.Feedback type="invalid">
                        Fill in the field
                    </Form.Control.Feedback>
                </InputGroup>
                <Container className="px-0">
                    <p className="mb-2">The quiz code</p>
                    <Container>
                        <Row>
                            <Col xs={2} className="bg-primary text-center shadow text-white rounded p-2">
                                {code}
                            </Col>
                            <Col>
                                <Button>
                                    <FontAwesomeIcon icon={faCopy}/>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </div>
    );
};

export default QuizSettings;