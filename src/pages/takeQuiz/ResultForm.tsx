import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IQuizForm} from "../createQuiz/interfaces";

interface ResProps {
    quiz: IQuizForm,
    totalCorrectAnswers: number,
    handleRestartQuiz: () => void,
    getAnswerColor: (index: number, anwerIndex: number) => string,
}

const ResultForm: React.FC<ResProps> = ({quiz, totalCorrectAnswers, handleRestartQuiz, getAnswerColor}) => {
    return (
        <Container>
            <Container className="p-5 text-center">
                <h2 style={{fontWeight: "800"}} >Result</h2>
                <p>Total Correct Answers: <span style={{fontWeight: 700}} className="text-success">{totalCorrectAnswers}</span></p>
                <Button className="mx-2" onClick={handleRestartQuiz}>Restart Quiz</Button>
                <Link to='/' className="mx-2"><Button>Back home</Button></Link>
            </Container>
            <Container className="my-4 py-5 text-center bg-white text-black rounded shadow w-50">
                <h2>Results:</h2>
                {
                    quiz.questions.map((item, index) =>
                        <div>
                            <h4>Question: №{index + 1}</h4>
                            <h6>{item.question}</h6>
                            {
                                item.answers.map((answer, answerIndex) =>
                                    <p className={getAnswerColor(index, answerIndex)}>{answer.answer}</p>
                                )
                            }
                        </div>
                    )
                }
            </Container>
        </Container>

    );
};

export default ResultForm;