import React from 'react';
import {Container, Form, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import QuizAnswer from "./QuizAnswer";
import {updateQuestion} from "../../state/quizSlice";

interface QuizQuestionProps{
    questionIndex: number
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({questionIndex}) => {
    const question = useSelector((state: RootState) => state.quiz.quiz.questions[questionIndex].question);
    const answers = useSelector((state: RootState) => state.quiz.quiz.questions[questionIndex].answers);
    const dispatch = useDispatch();

    const handleQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newQuestion = event.target.value;
        dispatch(updateQuestion({ questionIndex, question: newQuestion }));
    };

    
    return (
        <>
            <Container className="p-0 mb-2 border-bottom border-secondary-subtle">
                <h6> Question {questionIndex + 1}</h6>
            </Container>
            <Container style={{height: "400px", overflow: 'auto'}}>
                <Form.Label xmlFor="question_title">
                    Text
                    <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control style={{height: "200px"}}
                                  as="textarea"
                                  aria-label="textarea"
                                  id="question_title"
                                  name="question"
                                  value={question}
                                  onChange={handleQuestionChange}
                    />
                </InputGroup>

                <Container className="px-0">
                    <p className="mb-0">Answers<span className="text-danger">*</span></p>
                    <p className="mb-0">Is correct?</p>

                    {answers && answers.map((answer, answerIndex) => (
                        <QuizAnswer
                            key={answerIndex}
                            questionIndex={questionIndex}
                            answerIndex={answerIndex}
                        />
                    ))}
                </Container>
            </Container>
        </>
    );
};

export default QuizQuestion;