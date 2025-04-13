import React from 'react';
import QuizzesPrintTable from "../../../components/QuizzesPrintTable/QuizzesPrintTable";
import {IQuizForm} from "../../createQuiz/interfaces";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

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
            <Link to="/create/quiz">
                <Button
                    variant="p"
                    className="text-primary"
                >
                    Add quiz
                </Button>
            </Link>
        </Container>
    );
};

export default QuizzesRefactor;