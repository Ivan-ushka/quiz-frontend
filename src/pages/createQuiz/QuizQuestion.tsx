import React from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import QuizAnswer from "./QuizAnswer";
import {addOption, updateQuestion} from "../../state/quizSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

interface QuizQuestionProps{
    questionIndex: number
    validatedCheckBoxes: string
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({questionIndex, validatedCheckBoxes}) => {
    const question = useSelector((state: RootState) => state.quiz.quiz.questions[questionIndex].question);
    const answers = useSelector((state: RootState) => state.quiz.quiz.questions[questionIndex].answers);
    const dispatch = useDispatch();

    const handleQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newQuestion = event.target.value;
        dispatch(updateQuestion({ questionIndex, question: newQuestion }));
    };

    
    return (
        <>
            <Container className="p-0 mb-3 border-bottom border-secondary-subtle">
                <h6> Question {questionIndex + 1}</h6>
            </Container>
            <Container style={{height: "400px", overflow: 'auto'}}>
                <Form.Label xmlFor="question_title">
                    Text
                    <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                                  as="textarea"
                                  aria-label="textarea"
                                  id="question_title"
                                  name="question"
                                  value={question}
                                  onChange={handleQuestionChange}
                                  maxLength={200}
                                  style={{height: "100px"}}
                                  required
                    />
                    <Form.Control.Feedback type="invalid">
                        Fill in the field
                    </Form.Control.Feedback>
                </InputGroup>

                <Container className="px-0">
                    <p className="mb-0">Answers<span className="text-danger">*</span></p>
                    <p className="mb-0">Is correct?</p>
                    <p className="mb-0 text-danger">{validatedCheckBoxes}</p>
                    {answers && answers.map((answer, answerIndex) => (
                        <QuizAnswer
                            key={answerIndex}
                            questionIndex={questionIndex}
                            answerIndex={answerIndex}
                        />
                    ))}
                    {
                        answers && answers.length < 7 &&  <Button className="border-secondary shadow" onClick={() => dispatch(addOption(questionIndex))}><FontAwesomeIcon icon={faPlus} />Add answer</Button>
                    }
                </Container>
            </Container>
        </>
    );
};

export default QuizQuestion;