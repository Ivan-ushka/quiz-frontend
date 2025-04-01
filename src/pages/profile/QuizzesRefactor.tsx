import React from 'react';
import QuizzesPrintTable from "../../components/QuizzesPrintTable/QuizzesPrintTable";
import {IQuizForm} from "../createQuiz/interfaces";
import {Button, Container} from "react-bootstrap";

interface QuizzesRefactorProps {
    authQuizzes: IQuizForm[],
    fetchData: () => void,
}

const QuizzesRefactor: React.FC<QuizzesRefactorProps> = ({authQuizzes, fetchData}) => {
    return (
        <Container className="d-flex justify-content-center flex-column align-items-center">
            <h1>Your quizzes</h1>
            {
                authQuizzes ? <QuizzesPrintTable isModify={true} quizzes={authQuizzes} fetchData={fetchData}/> :
                <p>You dont have any quizzes...</p>
            }
            <Button variant="p" className="text-primary">Add new quiz</Button>
        </Container>
    );
};

export default QuizzesRefactor;