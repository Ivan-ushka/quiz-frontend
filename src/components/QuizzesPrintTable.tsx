import React from 'react';
import {IQuizForm} from "../pages/createQuiz/interfaces";
import {Table} from "react-bootstrap";

interface QuizzesPrintTableProps{
    quizzes: IQuizForm[],
    handleQuizClick: (item: string) => void,
}
const QuizzesPrintTable: React.FC<QuizzesPrintTableProps> = ({quizzes, handleQuizClick}) => {
    return (
        <Table className="p-3">
            <thead>
            <tr>
                <th>#</th>
                <th>Topic</th>
                <th>Author</th>
                <th>Likes</th>
            </tr>
            </thead>
            <tbody>
            {
                quizzes && quizzes.map((item, index) =>
                    <tr className="" key={index} onClick={() => handleQuizClick(item.quizID)}>
                        <td>{index + 1}</td>
                        <td>Topic: {item.title}</td>
                        <td>Created by: Ivan</td>
                        <td>Likes: 3000</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    );
};

export default QuizzesPrintTable;