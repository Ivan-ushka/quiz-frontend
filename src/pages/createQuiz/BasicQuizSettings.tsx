import React, {useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store";
import {updateDescription, updateTitle} from "../../state/quizSlice";

const BasicQuizSettings = () => {
    const dispatch: AppDispatch = useDispatch();
    const code = useSelector((state: RootState) => state.quiz.quiz.quizId);
    const title = useSelector((state: RootState) => state.quiz.quiz.title);
    const description = useSelector((state: RootState) => state.quiz.quiz.description);

    const [copyMessage, setCopyMessage] = useState<string>('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = event.target.value;
        dispatch(updateTitle(newTitle));
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescription = event.target.value;
        dispatch(updateDescription(newDescription));
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopyMessage('Code copied to clipboard')
            })
            .catch((error) => {
                setCopyMessage(`Failed to copy code to clipboard:', ${error}`)
            });
    };

    return (
        <>
            <Container className="p-0 mb-3 border-bottom border-secondary-subtle">
                <h6>Settings</h6>
            </Container>
            <Container style={{height: "400px", overflow: 'auto'}}>
                <Form.Label htmlFor="quiz_title">
                    Title of the quiz
                    <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control aria-label="quiz_title"
                                  id="quiz_title"
                                  onChange={handleTitleChange}
                                  value={title}
                                  required
                    />
                    <Form.Control.Feedback type="invalid">
                        Fill in the field
                    </Form.Control.Feedback>
                </InputGroup>

                <Form.Label htmlFor="quiz_description">
                    Description of the quiz
                    <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control style={{height: "200px"}}
                                  as="textarea"
                                  aria-label="quiz_description"
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
                    {
                        code ?
                            <>
                                <p className="mb-2">The quiz code. Click to save</p>
                                <Button className="p-3 mb-2 px-5" onClick={handleCopyCode}>
                                    {code}
                                </Button>
                                {
                                    copyMessage && <p>
                                        {copyMessage}
                                    </p>
                                }
                            </> :
                            <p>
                                <span className='text-danger'>*</span>
                                Save quiz to get quiz id and quiz link
                            </p>
                    }
                </Container>
            </Container>
        </>
    );
};

export default BasicQuizSettings;