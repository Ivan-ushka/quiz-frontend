import React from 'react';
import QuizzesPrintTable from "../../components/QuizzesPrintTable";
import {IQuizForm} from "../createQuiz/interfaces";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";

interface  QuizzesRefactorProps{
    authQuizzes: IQuizForm[],
}
const QuizzesRefactor: React.FC<QuizzesRefactorProps> = ({authQuizzes}) => {
    const navigate = useNavigate();

    const handleQuizClick = (quizId: string) => {
        navigate(`/quiz/${quizId}`);
    };

    return (
        <Container className="d-flex justify-content-center flex-column align-items-center">
            <h1>Your quizzes</h1>
            <QuizzesPrintTable isModify={true} quizzes={authQuizzes} handleQuizClick={handleQuizClick}/>
        </Container>
    );
};

export default QuizzesRefactor;