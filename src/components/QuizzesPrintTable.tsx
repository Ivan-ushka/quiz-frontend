import React from 'react';
import {IQuizForm} from "../pages/createQuiz/interfaces";
import {Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlay, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../state/store";
import {setQuiz} from "../state/quizSlice";
import {useNavigate} from "react-router-dom";
import {deleteQuiz} from "../http/actions/quizActions";
import UserService from "../http/services/UserService";

interface QuizzesPrintTableProps {
    quizzes: IQuizForm[],
    isModify: boolean
    fetchData?: () => void,
}

const QuizzesPrintTable: React.FC<QuizzesPrintTableProps> = ({quizzes, isModify, fetchData}) => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();

    const handleModifyQuiz = (item: IQuizForm) => {
        dispatch(setQuiz(item));
        navigate(`/create/quiz/`);
    }

    const handleQuizClick = (quizId: string) => {
        if (quizId) {
            navigate(`/quiz/${quizId}`);
        }
    };

    const handleDeleteQuizClick = async (quizId: string) => {
        if (quizId) {
            try {
                await deleteQuiz(quizId);
                if (fetchData) {
                    fetchData();
                }
            } catch (e) {
                alert(e)
            }

        }
    };

    const handleUserById = async (userId: string) => {
        if (userId) {
            try {
                const response = await UserService.getUserById(userId);
                const data = response.data;
                return data.user;
            } catch (e) {
                alert(e)
            }

        }
    };

    return (
        <Table className="p-3">
            <thead>
            <tr>
                <th>№</th>
                <th>Topic</th>
                {!isModify && <th>Author</th>}
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
                        onClick={!isModify ? (() => handleQuizClick(item.quizId)) : undefined}
                    >
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        {!isModify &&  <td>ivan</td>}
                        <td><Button variant="warning" onClick={() => handleQuizClick(item.quizId)}><FontAwesomeIcon
                            icon={faPlay}/></Button></td>
                        {isModify && <td><Button onClick={() => handleModifyQuiz(item)} variant="primary"><FontAwesomeIcon
                            icon={faPen}/></Button></td>}
                        {isModify &&
                            <td><Button onClick={() => handleDeleteQuizClick(item.quizId)} variant="danger"><FontAwesomeIcon
                                icon={faTrash}/></Button></td>}
                    </tr>
                )
            }
            </tbody>
        </Table>
    );
};

export default QuizzesPrintTable;