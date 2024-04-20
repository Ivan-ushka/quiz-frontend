import React from 'react';
import {IQuizForm} from "../pages/createQuiz/interfaces";
import {Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlay, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../state/store";
import {setQuiz} from "../state/quizSlice";
import {useNavigate} from "react-router-dom";

interface QuizzesPrintTableProps {
    quizzes: IQuizForm[],
    handleQuizClick: (item: string) => void,
    isModify: boolean
}

const QuizzesPrintTable: React.FC<QuizzesPrintTableProps> = ({quizzes, handleQuizClick, isModify}) => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();
    const handleModifyQuiz = (item: IQuizForm) => {
        dispatch(setQuiz(item));
        navigate(`/create/quiz/`);
    }


    return (
        <Table className="p-3">
            <thead>
            <tr>
                <th>#</th>
                <th>Topic</th>
                <th>Author</th>
                <th>Likes</th>
                <th>Start</th>
                {isModify && <th>Modify</th>}
                {isModify && <th>Delete</th>}
            </tr>
            </thead>
            <tbody>
            {
                quizzes && quizzes.map((item, index) =>
                    <tr
                        style={{verticalAlign: 'middle'}}
                        key={index}
                        onClick={!isModify ? (() => handleQuizClick(item.quizID)) : undefined}
                    >
                        <td>{index + 1}</td>
                        <td>Topic: {item.title}</td>
                        <td>Created by: Ivan</td>
                        <td>Likes: 3000</td>
                        <td><Button variant="warning" onClick={() => handleQuizClick(item.quizID)}><FontAwesomeIcon icon={faPlay}/></Button></td>
                        {isModify && <td ><Button onClick={() => handleModifyQuiz(item)} variant="primary"><FontAwesomeIcon icon={faPen}/></Button></td>}
                        {isModify && <td ><Button variant="danger"><FontAwesomeIcon icon={faTrash}/></Button></td>}
                    </tr>
                )
            }
            </tbody>
        </Table>
    );
};

export default QuizzesPrintTable;