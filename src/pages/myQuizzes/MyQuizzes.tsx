import React, {useEffect, useState} from 'react';
import QuizService from "../../http/QuizService";
import {IQuizForm} from "../createQuiz/interfaces";
import QuizzesPrintTable from "../../components/QuizzesPrintTable";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";

const MyQuizzes = () => {
    const [myQuizzes, setMyQuizzes] = useState<IQuizForm[]>([]);

    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData(){
        try{
            const response = await QuizService.getAuthQuizzes()
            setMyQuizzes(response.data)
            console.log(response)
        }catch (e: any){
            console.log(e)
        }
    }

    const navigate = useNavigate();

    const handleQuizClick = (quizId: string) => {
        navigate(`/quiz/${quizId}`);
    };

    return (
        <Container className="p-5 rounded shadow-lg my-5 d-flex justify-content-center align-items-center">
            {
                <QuizzesPrintTable quizzes={myQuizzes} handleQuizClick={handleQuizClick} />
            }
        </Container>
    );
};

export default MyQuizzes;